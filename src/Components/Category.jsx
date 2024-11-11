
import React from 'react';
import { useState } from 'react';

import { Button, Col, Form,  Modal, Row } from 'react-bootstrap';

import { addCategoryAPI, deleteCategoryAPI, getAVideoAPI, getCategoryAPI, updateCategoryAPI } from '../Service/allAPI';
import { useEffect } from 'react';
import VideoCard from './VideoCard';



function Category({dropVideoResponse}) {


  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const[categoryName,setCategoryName] = useState("")
  const[allCategories,setAllCategories] = useState([])


  const handleAdd= async()=>{
    if (categoryName) {
      const result= await addCategoryAPI({categoryName,allVideos:[]})
      // console.log(result);
      if (result.status>=200 && result.status<300) {
        handleClose()
        setCategoryName("")
      } else {
        console.log(result.message);
        
      }
    } else {
      alert("please fill missing fields")
    }
  }

  
    


  // console.log(categoryName);
  
  const getCategories=async()=>{
    const {data}=await getCategoryAPI()
    setAllCategories(data)
  }

  console.log(allCategories);

  useEffect(()=>{
    getCategories()
  },[dropVideoResponse])


  const removeCatecory = async(id)=>{
  await deleteCategoryAPI(id)
    getCategories()
  }


  const dragOver=(e)=>{
    console.log("video drag over the category");
    e.preventDefault()
    
  }

  // console.log(allCategories);

  const videoDrop=async(e,categoryId)=>{
    const vidoeId = e.dataTransfer.getData("videoId")
    console.log(vidoeId,"dropped into category id:",categoryId);
    const {data} = await getAVideoAPI(vidoeId)
    console.log(data);
    const selectedCategory= allCategories.find(item=>item.id==categoryId)
    selectedCategory.allVideos.push(data)
    console.log(selectedCategory);
    await updateCategoryAPI(categoryId,selectedCategory)
    getCategories()
    
    
  }

  const videoDragStarted=(e,vidoeId,categoryId)=>{
    let datashare= {vidoeId,categoryId}
    e.dataTransfer.setData("Data",JSON.stringify(datashare))
  }
  

  return (
    <>
    <div>

    <Button className='p-2 w-75' variant="primary" onClick={handleShow}>
      Add category 
      </Button>

    </div>
    

    <Modal
        show={show}
        onHide={handleClose}
        backdrop="static"
        keyboard={false}
      >
        <Modal.Header closeButton>
          <Modal.Title>Category Details</Modal.Title>
        </Modal.Header>
        <Modal.Body className='bg-primary text-light'>

       <form>

       <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
        <Form.Label>Category Name</Form.Label>
        <Form.Control type="text" placeholder="Enter a category Name" onChange={e=>setCategoryName(e.target.value)} />
      </Form.Group>

     
       </form>
         
        </Modal.Body>
        <Modal.Footer>
          <Button variant="danger" onClick={handleClose}>
            Cancel
          </Button>
          <Button variant="success" onClick={handleAdd}>Add</Button>
        </Modal.Footer>
      </Modal>

      {
        allCategories?.length>0?allCategories.map(category=>(
          <div className='border border-2 border-dark m-3 p-3' onDragOver={e=>dragOver(e)} onDrop={e=>videoDrop(e,category?.id)}> 
           <div className='d-flex justify-content-between align-items-center'>
             <h3>{category?.categoryName}</h3>
             <button onClick={()=>removeCatecory(category?.id)} className='text-danger btn'><i class="fa-solid fa-trash"></i></button>

           </div>

             <Row>
              {
                category?.allVideos.length>0?category?.allVideos.map(card=>(
                  <Col  sm={12} className='mb-3 mt-2 p-2' draggable onDragStart={e=>videoDragStarted(e,card,id,category.id)} >
                   <VideoCard  video={card} insideCategory= {true}/>
                
                 </Col>
                  
                )):null
              }
             </Row>

          </div>
        )):<p className='text-danger'>No Categories Created</p>
      }


    </>
  )
}

export default Category
