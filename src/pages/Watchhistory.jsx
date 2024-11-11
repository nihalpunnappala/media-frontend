import React from 'react'
import { useEffect } from 'react'
import { useState } from 'react'
import { Link } from 'react-router-dom'
import { deleteHistoryAPI, getHistoryAPI } from '../Service/allAPI'

function Watchhistory() {

const [history,setHistory] = useState([])

useEffect(()=>{
getHistory()
},[])

const getHistory= async()=>{
  const result = await getHistoryAPI()
  if (result.status==200) {
    setHistory(result.data)
  } else {
    console.log("api failed");
    setHistory(result.message)
  }
}

console.log(history);


const removeVideoHistory = async(id)=>{
  await deleteHistoryAPI(id)
  getHistory()
}


  return (
    <>

<div className='container mt-5 mb-3 d-flex justify-content-between'>
    <h3>history</h3>

<Link style={{textDecoration:"none",color:"#e36300",fontSize:"30px"}} to={"/home"}>
Back to home <i class="fa-solid fa-backward"></i>
</Link>



    </div>


<div className="container mt-5 mb-3 w-100">
  <table className="table shadow w-100 p-3 m-2">

<tr>
  <th>#</th>
  <th>Title</th>
  <th>Video Url</th>
  <th>Time Stamp</th>
  <th>Action</th>
</tr>
{

history?.length>0?history.map((video,index)=>(
<tr>
 <td>{index+1}</td>
 <td>{video?.caption}</td>
 <td><a href={video?.link} target='_blank'>{video?.link}</a></td>
 <td>{video?.timeStamb}</td>
 <td><button className='text-danger btn' onClick={()=>removeVideoHistory(video?.id)}><i class="fa-solid fa-trash"></i></button></td>
</tr>
  )):<p className='text-danger fw-bolder'>Nothing to Display</p>

}

  </table>

</div>

    </>
  )
}

export default Watchhistory
