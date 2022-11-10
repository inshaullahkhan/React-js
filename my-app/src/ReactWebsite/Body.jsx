import React from 'react'
// import Carousel from 'react-bootstrap/Carousel';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Form from 'react-bootstrap/Form';
import Accordion from 'react-bootstrap/Accordion';
import 'bootstrap/dist/css/bootstrap.min.css';

import './style.css'
import Image from 'react-bootstrap/Image'
import "bootstrap-icons/font/bootstrap-icons.css";

function BasicExample() {
  return (
    <div>
      {/* <div className="main"> */}

    <div className='image-content'>
  <div className='imaged'>
  <img className='w-100 h-150' src="./image/slider.jpg" alt="" />
  </div>
    <h1>One Page Bootstrap Website Template</h1>
    <p>We are team of talented designers</p>
    {/* </div> */}
      
      </div>

<section className="card-content row g-4 d-flex" id='home'>


<Card style={{ width: '18rem'}}>

      <Card/>
      <i className="bi bi-layers"></i>
      <Card.Body>
        <Card.Title>Lorem Ipsum</Card.Title>
        <Card.Text>
        Voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi
        </Card.Text>
        {/* <Button variant="primary">Go somewhere</Button> */}
      </Card.Body>
    </Card>
    <Card style={{ width: '18rem' }}>

      <Card/>
      <i className="bi bi-layers"></i>
      <Card.Body>
        <Card.Title>Sed ut perspiciatis</Card.Title>
        <Card.Text>
        Voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi
        </Card.Text>
        {/* <Button variant="primary">Go somewhere</Button> */}
      </Card.Body>
    </Card>
    <Card style={{ width: '18rem' }}>

      <Card/>
      <i className="bi bi-layers"></i>
      <Card.Body>
        <Card.Title>Magni Dolores</Card.Title>
        <Card.Text>
        Voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi
        </Card.Text>
        {/* <Button variant="primary">Go somewhere</Button> */}
      </Card.Body>
    </Card>
    <Card style={{ width: '18rem' }}>

      <Card/>
      <i className="bi bi-layers"></i>
      <Card.Body>
        <Card.Title>Nemo Enim</Card.Title>
        <Card.Text>
        Voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi
        </Card.Text>
        {/* <Button variant="primary">Go somewhere</Button> */}
      </Card.Body>
    </Card>

</section>

{/* ***** about **** */}

<section className="container" id='about'>

<div className="about-content">

<h1 className='text-center justify-content-center text-primary text-lg ' style={{fontFamily:'sans-serif', fontSize:'32px'}} >ABOUT</h1>
<p className='text-center justify-content-center'>Magnam dolores commodi suscipit. Necessitatibus eius consequatur ex aliquid fuga eum quidem.</p>

</div>

<div className='about-content2 d-flex justify-content-space-between row g-4 pt-5 pb-5'>
 
 <div className="about-left col-md-6 col-ms-6 mb-3">
  <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
  <i className="bi bi-check2-all" style={{fontSize:'16px'}}>Ullamco laboris nisi ut aliquip ex ea commodo consequat
</i><br />
<i className="bi bi-check2-all" style={{fontSize:'16px'}}>Ullamco laboris nisi ut aliquip ex ea commodo consequat
</i> <br />
<i className="bi bi-check2-all" style={{fontSize:'16px'}}>Ullamco laboris nisi ut aliquip ex ea commodo consequat
</i>
 </div>
 <div className="about-right col-md-6 col-ms-6 mb-3">

    <p>Ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
    </p>
    <Button variant="outline-primary">Learn More</Button>
 </div>

</div>

</section>


<section className="section2 pt-5 pb-5 bg-light">

<div class="container pt-5 bg-light">

  <div class="row pb-5">

     {/* <div class=" col-6 col-md-5">  */}

      <div class="col-md-5 mt-3 w-120" >
        <img src="./image/video.jpg" alt="" class="w-100"/>
      </div>

      <div class=" col-md-5 mt-3 ms-3">
        <h3 class="text-primary">Voluptatem dignissimos provident quasi corporis voluptates sit assumenda.</h3>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
        <i className="bi bi-check2-all" style={{fontSize:'16px'}}>Ullamco laboris nisi ut aliquip ex ea commodo consequat
</i><br />
<i className="bi bi-check2-all" style={{fontSize:'16px'}}>Ullamco laboris nisi ut aliquip ex ea commodo consequat
</i> <br />
<i className="bi bi-check2-all" style={{fontSize:'16px'}}>Ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate trideta storacalaperda mastiro dolore eu fugiat nulla pariatur.
</i>
<p className='pt-4'>Ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum</p>
      </div>


    {/* <!-- </div> --> */}

  </div>
</div>
</section>

{/* **** Servcies  ***** */}
  
  <section className="servcies" id='services' >

   <div className="container">

    <div className="row pb-5">

      <div className=" col-md-10 mx-auto text-center pt-5" >

       <h1 className='text-primary'  style={{fontFamily:'sans-serif', fontSize:'32px'}} >Our Services</h1>

       <p>It takes great pains to benefit. His needs result from something that actually drives him away. Let them be what they want. Anyone whom anyone desires. And no one who hinders receives the others. Because he should flee in this office of convenience, which is here.</p>

      </div>

    </div>


    
    <div className="row g-4">

     <div className="col-md-4 col-ms-6 mb-3">
      
      <div className="servics shadow p-5 mb-5">

      <i className="bi bi-layers"></i>

      <h3> Web Development </h3>
      <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Temporibus qui nihil, eligendi odit asperiores culpa nemo? Adipisci, dolores doloremque aspernatur 
      </p>

      </div>

     </div>
     <div className="col-md-4 col-ms-6 mb-3">
      
      <div className="servics shadow p-5 mb-5  ">

      <i className="bi bi-layers"></i>

      <h3> App Development </h3>
      <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Temporibus qui nihil, eligendi odit asperiores culpa nemo? Adipisci, dolores doloremque aspernatu
      </p>

      </div>

     </div>
     <div className="col-md-4 col-ms-6 mb-3">
      
      <div className="servics shadow p-5 mb-5  ">

      <i className="bi bi-layers"></i>

      <h3> Digital Marketing </h3>
      <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Temporibus qui nihil, eligendi odit asperiores culpa nemo? Adipisci, dolores doloremque aspernatur 
      </p>

      </div>

     </div>
     <div className="col-md-4 col-ms-6 mb-3">
      
      <div className="servics shadow p-5 mb-5  ">

      <i className="bi bi-layers"></i>

      <h3> Graphic Designing </h3>
      <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Temporibus qui nihil, eligendi odit asperiores culpa nemo? Adipisci, dolores doloremque aspernatur 
      </p>

      </div>

     </div>
     <div className="col-md-4 col-ms-6 mb-3">
      
      <div className="servics shadow p-5 mb-5">

      <i className="bi bi-layers"></i>

      <h3> Machine Learning </h3>
      <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Temporibus qui nihil, eligendi odit asperiores culpa nemo? Adipisci, dolores doloremque aspernatur 
      </p>

      </div>

     </div>
     <div className="col-md-4 col-ms-6 mb-3">
      
      <div className="servics shadow p-5 mb-5">

      <i className="bi bi-layers"></i>

      <h3> React App Development </h3>
      <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Temporibus qui nihil, eligendi odit asperiores culpa nemo? Adipisci, dolores doloremque aspernatur 
      </p>
      </div>
     </div>
    </div>
   </div>
</section>

<section className="action bg-primary p-5 ">
  
  <div className='col-md-10 mx-auto text-center text-light ' >

    {/* <div className='text-center' > */}

      <h3 style={{fontFamily:'sans-serif', fontSize:'32px'}}>Call To Action</h3>
       
       <p>Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>

       <Button variant="outline-light pe-4 ps-4 mt-3">Call To Action</Button>

    {/* </div> */}


  </div>
  

</section>
<section className='container pt-5' id='team' >
<div className="row pb-5">

      <div className=" col-md-10 mx-auto text-center pt-5" >

       <h1 className='text-primary' style={{fontFamily:'sans-serif', fontSize:'32px'}}>Team</h1>

       <p>It takes great pains to benefit. His needs result from something that actually drives him away. Let them be what they want. Anyone whom anyone desires. And no one who hinders receives the others. Because he should flee in this office of convenience, which is here.</p>

      </div>

    </div>

{/* <div className="container text-center"> */}

<div className= 'row g-4 p-5 pb-5' >

<div className='col-md-3 mx-auto'>
<Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src="./image/team-1.jpg"/>
      <Card.Body>
        <Card.Title>Walter White</Card.Title>
        <Card.Text>
        Chief Executive Officer
        </Card.Text>
        <i class="bi bi-facebook p-2"></i>
        <i class="bi bi-twitter p-2"></i>
        <i className='bi bi-instagram p-2'></i>
        <i className='bi bi-linkedin p-2' ></i>
        {/* <Button variant="primary">Go somewhere</Button> */}
      </Card.Body>
    </Card>
</div>
<div className='col-md-3 mx-auto'>

<Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src="./image/team-2.jpg"/>
      <Card.Body>
        <Card.Title>Walter White</Card.Title>
        <Card.Text>
        Chief Executive Officer
        </Card.Text>
        <i class="bi bi-facebook p-2"></i>
        <i class="bi bi-twitter p-2"></i>
        <i className='bi bi-instagram p-2'></i>
        <i className='bi bi-linkedin p-2' ></i>
        {/* <Button variant="primary">Go somewhere</Button> */}
      </Card.Body>
    </Card>

</div>

<div className='col-md-3 mx-auto'>

<Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src="./image/team-3.jpg"/>
      <Card.Body>
        <Card.Title>Walter White</Card.Title>
        <Card.Text>
        Chief Executive Officer
        </Card.Text>
        <i class="bi bi-facebook p-2"></i>
        <i class="bi bi-twitter p-2"></i>
        <i className='bi bi-instagram p-2'></i>
        <i className='bi bi-linkedin p-2' ></i>
        {/* <Button variant="primary">Go somewhere</Button> */}
      </Card.Body>
    </Card>

</div>

<div className='col-md-3 mx-auto'>

<Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src="./image/team-4.jpg"/>
      <Card.Body>
        <Card.Title>Walter White</Card.Title>
        <Card.Text>
        Chief Executive Officer
        </Card.Text>
        <i class="bi bi-facebook p-2"></i>
        <i class="bi bi-twitter p-2"></i>
        <i className='bi bi-instagram p-2'></i>
        <i className='bi bi-linkedin p-2' ></i>
        {/* <Button variant="primary">Go somewhere</Button> */}
      </Card.Body>
    </Card>

</div>

  </div> 
</section>

{/* ******* Pricing Section ****** */}

<div className='bg-light'>

<section className="container pt-5 " id='pricing'>


<div className=" pb-5">

      <div className=" col-md-10 mx-auto text-center pt-5" >

       <h1 className='pb-4 text-primary' >Pricing</h1>

       <p>It takes great pains to benefit. His needs result from something that actually drives him away. Let them be what they want. Anyone whom anyone desires. And no one who hinders receives the others. Because he should flee in this office of convenience, which is here.</p>

      </div>

    </div>

    <div className="row pt-5 pb-5">


    <div className="col-md-4 text-center">
      
    <Card style={{listStyle: 'none' }}>
      {/* <Card.Img variant="top" src="holder.js/100px180" /> */}
      <Card.Body>
        <Card.Title>Free</Card.Title>
        <Card.Text>
          <h1 className="heading"> <span style={{fontSize : '16px'}} >month</span> </h1>
         <li>Aida dere</li><br />
         <li>Nec feugiat nisl</li><br />
         <li>Nulla at volutpat dola</li> <br />
         <li>Pharetra massa</li><br />
         <li>Massa ultricies mi</li><br />
        </Card.Text>
        <Button variant="outline-primary">Buy Now</Button>
      </Card.Body>
    </Card>
    
    </div>
    <div className="col-md-4 text-center text-light">
      
      <Card style={{listStyle: 'none' , backgroundColor: 'blue' }}>
        {/* <Card.Img variant="top" src="holder.js/100px180" /> */}
        <Card.Body>
          <Card.Title>Business</Card.Title>
          <Card.Text>
            <h1 className="heading"> $19/ <span style={{fontSize : '16px'}} >month</span> </h1>
           <li>Aida dere</li><br />
           <li>Nec feugiat nisl</li><br />
           <li>Nulla at volutpat dola</li> <br />
           <li>Pharetra massa</li><br />
           <li>Massa ultricies mi</li><br />
          </Card.Text>
          <Button variant="outline-light">Buy Now</Button>
        </Card.Body>
      </Card>
      
      </div>
      <div className=" col-md-4 text-center">
      
      <Card style={{listStyle: 'none' }}>
        {/* <Card.Img variant="top" src="holder.js/100px180" /> */}
        <Card.Body>
          <Card.Title>Developer</Card.Title>
          <Card.Text>
            <h1 className="heading"> $29/ <span style={{fontSize : '16px'}} >month</span> </h1>
           <li>Aida dere</li><br />
           <li>Nec feugiat nisl</li><br />
           <li>Nulla at volutpat dola</li> <br />
           <li>Pharetra massa</li><br />
           <li>Massa ultricies mi</li><br />
          </Card.Text>
          <Button variant="outline-primary">Buy Now</Button>
        </Card.Body>
      </Card>
      
      </div>

    </div>
</section>
</div>

    {/* ***** FAQ sectioin ***** */}

<section className="container pt-5 pb-5 " id='faq'>


<div className="row pb-5">

      <div className=" col-md-10 mx-auto text-center pt-5 pb-5" >

       <h2 className='pb-4 text-primary'style={{fontFamily:'sans-serif', fontSize:'32px'}} >FREQUENTLY ASKED QUESTIONS</h2>

       <p style={{fontSize:'18px'}} >It takes great pains to benefit. His needs result from something that actually drives him away. Let them be what they want. Anyone whom anyone desires. And no one who hinders receives the others. Because he should flee in this office of convenience, which is here.</p>

      </div>

    </div>
    <div className="acord">

    <Accordion defaultActiveKey="0">
      <Accordion.Item eventKey="0">
        <Accordion.Header><i class="bi bi-question-circle" style={{fontSize:'18px'}} > Non consectetur a erat nam at lectus urna duis? </i></Accordion.Header>
        <Accordion.Body style={{fontSize:'18px'}}>
         Feugiat pretium nibh ipsum consequat. Tempus iaculis urna id volutpat lacus laoreet non curabitur gravida. Venenatis lectus magna fringilla urna porttitor rhoncus dolor purus non.
        </Accordion.Body>
      </Accordion.Item>
      <Accordion.Item eventKey="0">
        <Accordion.Header><i class="bi bi-question-circle" style={{fontSize:'18px'}} > Non consectetur a erat nam at lectus urna duis? Lorem ipsum, dolor sit amet consectetur adipisicing. </i></Accordion.Header>
        <Accordion.Body style={{fontSize:'18px'}} >
        Dolor sit amet consectetur adipiscing elit pellentesque habitant morbi. Id interdum velit laoreet id donec ultrices. Fringilla phasellus faucibus scelerisque eleifend donec pretium. Est pellentesque elit ullamcorper dignissim. Mauris ultrices eros in cursus turpis massa tincidunt dui.
        </Accordion.Body>
      </Accordion.Item>
      <Accordion.Item eventKey="0">
        <Accordion.Header><i class="bi bi-question-circle" style={{fontSize:'18px'}} > Non consectetur a erat nam at lectus urna duis? Lorem ipsum dolor sit, amet consectetur adipisicing elit. Vero a odio blanditiis! </i></Accordion.Header>
        <Accordion.Body style={{fontSize:'18px'}}  >
        Dolor sit amet consectetur adipiscing elit pellentesque habitant morbi. Id interdum velit laoreet id donec ultrices. Fringilla phasellus faucibus scelerisque eleifend donec pretium. Est pellentesque elit ullamcorper dignissim. Mauris ultrices eros in cursus turpis massa tincidunt dui.
        </Accordion.Body>
      </Accordion.Item>
      <Accordion.Item eventKey="0">
        <Accordion.Header><i class="bi bi-question-circle" style={{fontSize:'18px'}} > Non consectetur a erat nam at lectus urna duis? Lorem ipsum dolor sit amet. </i></Accordion.Header>
        <Accordion.Body style={{fontSize:'18px'}}>
        Dolor sit amet consectetur adipiscing elit pellentesque habitant morbi. Id interdum velit laoreet id donec ultrices. Fringilla phasellus faucibus scelerisque eleifend donec pretium. Est pellentesque elit ullamcorper dignissim. Mauris ultrices eros in cursus turpis massa tincidunt dui.
        </Accordion.Body>
      </Accordion.Item>
      <Accordion.Item eventKey="0">
        <Accordion.Header><i class="bi bi-question-circle" style={{fontSize:'18px'}} > Non consectetur a erat nam at lectus urna duis? Lorem ipsum dolor sit amet consectetur adipisicing elit. </i></Accordion.Header>
        <Accordion.Body style={{fontSize:'18px'}} >
        Dolor sit amet consectetur adipiscing elit pellentesque habitant morbi. Id interdum velit laoreet id donec ultrices. Fringilla phasellus faucibus scelerisque eleifend donec pretium. Est pellentesque elit ullamcorper dignissim. Mauris ultrices eros in cursus turpis massa tincidunt dui.
        </Accordion.Body>
      </Accordion.Item>
    </Accordion>

    </div>
</section>

{/* **** contact us sectioin ***** */}
<div className="bg-light pb-5">

<section className="container " id='contact' >


<div className="row">

      <div className=" col-md-10 mx-auto text-center pt-5 pb-5" >

       <h2 className='pb-4 text-primary'style={{fontFamily:'sans-serif', fontSize:'32px'}} >CONTACT US</h2>

       <p style={{fontSize:'18px'}} >It takes great pains to benefit. His needs result from something that actually drives him away. Let them be what they want. Anyone whom anyone desires. And no one who hinders receives the others. Because he should flee in this office of convenience, which is here.</p>

      </div>

    </div>
    <div className="row">

    <div className=" contact col-md-6">
    <i className="bi bi-geo-alt-fill" style={{fontStyle:'normal',fontFamily:'san-serif' }}  >{' '}Location</i>
     <p style={{marginLeft: '2rem'}}>A108 Adam Street, New York, NY 535022</p>
     <i className="bi bi-envelope-fill" style={{fontStyle:'normal',fontFamily:'san-serif'}}  >{'  '}Email</i>
     <p style={{marginLeft: '2rem'}}>inshaullah733@gmail.com</p>
     <i className="bi bi-telephone-fill" style={{fontStyle:'normal',fontFamily:'san-serif'}}  >{'  '}Call</i>
     <p style={{marginLeft: '2rem'}}>+923134084500</p>

    </div>

   <div className=" col-md-6 ">
   <Form>
      <Form.Group className="mb-3" controlId="formBasicText">
        <Form.Label>Enter your name</Form.Label>
        <Form.Control type="text" placeholder="Your name" />
        <Form.Text className="text-muted">
      
        </Form.Text>
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Enter your Email</Form.Label>
        <Form.Control type="email" placeholder="Your name" />
        <Form.Text className="text-muted">
      
        </Form.Text>
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicMessage">
        <Form.Label>Enter your Message</Form.Label>
        <Form.Control type="message" placeholder="Your name" />
        <Form.Text className="text-muted">
      
        </Form.Text>
      </Form.Group>

      <Button variant="primary" type="submit">
        Submit
      </Button>
    </Form>

   </div>

    </div>
     

</section>

</div>

{/* ****** Footer******** */}

<div className=' top shadow'>

  <footer className='container'>

    <div className=" row g-4">

    <div className="footer col-md-3  ">
    
     <h3>OnePage</h3>
     <p style={{color: 'gray'}}  >A108 Adam Street
New <br/> York, NY 535022
United States
<br /><br />
Phone: +1 5589 55488 55 <br />
Email: info@example.com
</p>


    </div>
    <div className="footer col-md-3  ">
    
    <h4 className='useful' >Useful Links</h4>
    <i className="bi bi-arrow-right-short">Home</i> <br /> <br />
    <i className="bi bi-arrow-right-short">About</i><br /><br />
    <i className="bi bi-arrow-right-short">Services</i><br /><br />
    <i className="bi bi-arrow-right-short">Team</i><br /><br />
    <i className="bi bi-arrow-right-short">pricing</i><br /><br />
    <i className="bi bi-arrow-right-short">FAQ</i><br /><br />
    {/* <i className="bi bi-arrow-right-short">Contact Us</i> */}
    


   </div>
   <div className="footer col-md-3 ">
    
    <h4>Our Services</h4>

    <i className="bi bi-arrow-right-short">Web Development</i> <br /> <br />
    <i className="bi bi-arrow-right-short">App Development</i><br /><br />
    <i className="bi bi-arrow-right-short">Digital Marketing</i><br /><br />
    <i className="bi bi-arrow-right-short">Grpahic Designing</i><br /><br />
    <i className="bi bi-arrow-right-short">Artificial Intellegence</i><br /><br />
    <i className="bi bi-arrow-right-short">Machine Learning</i><br /><br />
   

   </div>
   <div className="footer col-md-3  ">
    
    <h4>Join Our Newsletter</h4>
    <p style={{color: 'gray'}} >Tamen quem nulla quae legam multos aute sint culpa legam noster magna

</p>

<form action="">


<Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Enter your Email</Form.Label>
        <Form.Control type="email" placeholder="Your Email" />
        <Form.Text className="email-muted">
      
        </Form.Text>
        </Form.Group>
        <Button variant="primary" type="submit">
        Send
      </Button>
</form>

   </div>

    </div>
  </footer>
</div>

</div>

  );
}

export default BasicExample;