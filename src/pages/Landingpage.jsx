import React from 'react'
import { Row, Col } from 'react-bootstrap'
import {  MDBCard,  MDBCardBody,  MDBCardTitle,  MDBCardText,  MDBCardImage, MDBBtn, MDBRipple} from 'mdb-react-ui-kit';
import { Link } from 'react-router-dom'

function Landingpage() {
  return (
    <div>

      <Row className="mt-5 d-flex align-item-center justify-content-between w-100 ">
      <Col></Col>
      <Col lg={5}>
      <h1 style={{fontSize:"35px"}} className="text-primary">Welcome to <span>Media-Player</span></h1>
      <p>Select Windows Media Player. Always use the selected program to open this kind of file is selected by default. If you want all GIF files to open in Windows Media Player, leave the box checked. If not, deselect this option.A media player is a software application or hardware device that plays audio and video files. Media players can play files from a storage device, disc, or 
        stream them from the internet</p>
        <Link style={{textDecoration:"none"}} to={'/home'} className='btn btn-primary'>Get Start</Link>
      </Col>
      <Col lg={5}>
      <img src="https://cdn.dribbble.com/users/10585521/screenshots/17428724/mxplayer_logo_motion_1.gif" alt=""  style={{height:"300px",width:"450px"}}/>
      </Col>
      <Col></Col>
      </Row>


{/* card section */}

      <div className='container mt-3 mb-5 d-flex justify-content-center align-items-center flex-column w-100'>
        <h2 className='text-center  mt-5'>Features</h2>
        <div className='card mb-5 mt-5 d-flex align-items-center justify-content-between w-100 flex-row'>


        {/* 1 */}
        <MDBCard style={{width:"18rem"}}>
      <MDBRipple rippleColor='light' rippleTag='div' className='bg-image hover-overlay'>
        <MDBCardImage src='https://play-lh.googleusercontent.com/IwEHGY0XX8lSE4vO_yLWvCgDTWI_Kd7JX8I0xozYaTRm9MpKtlv8TJ9EqIcLf7HqpErA' fluid alt='...' />
        <a>
          <div className='mask' style={{ backgroundColor: 'rgba(251, 251, 251, 0.15)' }}></div>
        </a>
      </MDBRipple>
      <MDBCardBody>
        <MDBCardTitle>Managing Videos</MDBCardTitle>
        <MDBCardText>
          Some quick example text to build on the card title and make up the bulk of the card's content.
        </MDBCardText>
        <MDBBtn href='#'>Manage</MDBBtn>
      </MDBCardBody>
    </MDBCard>

    {/* 2 */}
    <MDBCard style={{width:"18rem"}}>
      <MDBRipple rippleColor='light' rippleTag='div' className='bg-image hover-overlay'>
        <MDBCardImage  src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSGfrNFC0Y9zdGO5RUu820sg9tHa6YbdGa1bf6X_M2m4Mef9mjrWinTR1a3NphuGvPyPqw&usqp=CAU' fluid alt='...' />
        <a>
          <div className='mask' style={{ backgroundColor: 'rgba(251, 251, 251, 0.15)' }}></div>
        </a>
      </MDBRipple>
      <MDBCardBody>
        <MDBCardTitle>Categorized Video</MDBCardTitle>
        <MDBCardText>
          Some quick example text to build on the card title and make up the bulk of the card's content.
        </MDBCardText>
        <MDBBtn href='#'>Categorize</MDBBtn>
      </MDBCardBody>
    </MDBCard>

    {/* 3 */}
    <MDBCard style={{width:"18rem"}}>
      <MDBRipple rippleColor='light' rippleTag='div' className='bg-image hover-overlay'>
        <MDBCardImage src='https://imgvisuals.com/cdn/shop/products/animated-forward-gradient-ui-icon-118755.gif?v=1697071121' fluid alt='...' />
        <a>
          <div className='mask' style={{ backgroundColor: 'rgba(251, 251, 251, 0.15)' }}></div>
        </a>
      </MDBRipple>
      <MDBCardBody>
        <MDBCardTitle>Watch History</MDBCardTitle>
        <MDBCardText>
          Some quick example text to build on the card title and make up the bulk of the card's content.
        </MDBCardText>
        <MDBBtn href='#'>history</MDBBtn>
      </MDBCardBody>
    </MDBCard>
        </div>
        </div>



     {/* details section */}
<div className="container border d-flex align-items-center justify-content-center w-100">
  <div className="col-lg-5">

<h4 className='fw-bolder text-primary'>Simple,Powerful & Fast</h4>
<h6  className='m-3 text-primary'><span  className='text-black fw-bolder'>Play Everything :</span> Lorem ipsum dolor sit, amet consectetur adipisicing elit. Explicabo minima laborum nam officia eos magnam, neque temporibus blanditiis rem corporis modi quasi in. Molestias labore illo debitis nesciunt. Nam, quisquam. </h6>
 
 
<h6  className='m-3 text-primary'><span className='text-black fw-bolder'>Categorize Videos :</span> Lorem ipsum dolor sit, amet consectetur adipisicing elit. Explicabo minima laborum nam officia eos magnam, neque temporibus blanditiis rem corporis modi quasi in. Molestias labore illo debitis nesciunt. Nam, quisquam. </h6>


<h6  className='m-3 text-primary'><span className='text-black fw-bolder'>Managing Videos :</span> Lorem ipsum dolor sit, amet consectetur adipisicing elit. Explicabo minima laborum nam officia eos magnam, neque temporibus blanditiis rem corporis modi quasi in. Molestias labore illo debitis nesciunt. Nam, quisquam. </h6>
  </div>

  <div className="col-lg-5 ms-5 mt-3 mb-3">
  <iframe width="560" height="315" src="https://www.youtube.com/embed/YyKjSw9b9s8?si=6AkPs1mWAZiJ7ZOf" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>  </div>
</div>

    </div>
  )
}

export default Landingpage
