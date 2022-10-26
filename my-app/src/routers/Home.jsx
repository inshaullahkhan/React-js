import React from 'react'
import{Link} from 'react-router-dom'
// import './style.css'
const Home = () => {
  return (

    <div> 
        <Link to= '/product/1' > Pitzaa </Link>
        <Link to= '/product/3' > Burger </Link>
        <Link to= '/product/5' > Zinger </Link>
        
     <h1 className='head' > hell  this is a new world</h1>

    </div>
  )
}

export default Home