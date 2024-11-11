
import { uploadVideoAPI } from '../Service/allAPI';
import React, { useState } from 'react';
import { Button, Form, Modal } from 'react-bootstrap';


function Add({setUploadVideoResponse}) {


  const [show, setShow] = useState(false);

  const handleClose = () =>  {setShow(false);
    setUploadVideo({
      id:"",caption:"",url:"",link:""
    })
  }
  const handleShow = () => setShow(true);
     
  const[uploadVideo,setUploadVideo]= useState({
    id:"",caption:"",url:"",link:""
  })

  console.log(uploadVideo);

  

  const getYoutubeLink =(e)=>{
    const {value} = e.target

    if (value.includes("v=")) {
      let VID =value.split("v=")[1].slice(0,11)
      console.log(`https://www.youtube.com/embed/${VID}`);
      setUploadVideo({...uploadVideo,link:`https://www.youtube.com/embed/${VID}`})
      
      
    } else {
      
      setUploadVideo({...uploadVideo,link:""})
    }
  }


  const handleAdd = async()=>{
    const{id,caption,url,link}=uploadVideo

    if (!id || !caption || !url ||  !link) {
   alert("please fill the missing fields");

    } else {
      // api call- upload video to json server
      const result = await  uploadVideoAPI(uploadVideo)
      console.log(result);
      if (result.status>=200 && result.status<300) {
        alert("video uploaded")
        handleClose()
        setUploadVideoResponse(result.data)
        
      }else{
        alert(result.message)
      }
      
    }
  }


  



  return (
    <>
    
    <Button variant="primary" onClick={handleShow}>
       Upload Videos <i class="fa-solid fa-upload fa-beat-fade"></i>
      </Button>

    <Modal
        show={show}
        onHide={handleClose}
        backdrop="static"
        keyboard={false}
      >
        <Modal.Header closeButton>
          <Modal.Title>Video Detials</Modal.Title>
        </Modal.Header>
        <Modal.Body className='bg-primary text-light'>

       <form>

       <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
        <Form.Label>Video Id</Form.Label>
        <Form.Control type="email" placeholder="Video Id" onChange={(e)=>setUploadVideo({...uploadVideo,id:e.target.value })}/>
      </Form.Group>

      <Form.Group className="mb-3" controlId="exampleForm.ControlInput2">
        <Form.Label>Video Title</Form.Label>
        <Form.Control type="email" placeholder="Video Title" onChange={(e)=>setUploadVideo({...uploadVideo,caption:e.target.value })}/>
      </Form.Group>

      <Form.Group className="mb-3" controlId="exampleForm.ControlInput3">
        <Form.Label>Image URL</Form.Label>
        <Form.Control type="email" placeholder="Image URL" onChange={(e)=>setUploadVideo({...uploadVideo,url:e.target.value })}/>
      </Form.Group>

      <Form.Group className="mb-3" controlId="exampleForm.ControlInput4">
        <Form.Label>Video URL</Form.Label>
        <Form.Control type="email" placeholder="Video URL" onChange={getYoutubeLink} />
      </Form.Group>

       </form>
         
        </Modal.Body>
        <Modal.Footer>
          <Button variant="danger" onClick={handleClose}>
            Cancel
          </Button>
          <Button variant="success" onClick={handleAdd}>Upload</Button>
        </Modal.Footer>
      </Modal>
    </>



  )
}

export default Add
