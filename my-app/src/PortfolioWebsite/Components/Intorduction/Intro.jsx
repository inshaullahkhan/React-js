import React from 'react'
import './Intro.css'
import Crown from '/images/crown.png'
import Thumb from '/images/thumbup.png'
import Imogi from '/images/glassesimoji.png'
import Small from '../SmallSec/Small'
// import Small from '../SmallSec/Small'
// import './Small.css'

// import Crown from '../images/crown.png'
function Intro() {
  return (
    <div>

        <div className="introduction">

        <div className="i-left">

        <div className="i-name">
            <span>Hey! I am</span>
            <span>Insha Kundi</span>
            <span>Front React Developerd with heigh level of Experience in web designing and devlopment producting the high quality work</span>
        </div>
            

        <button className="button i-button">Hire Me</button>
        <div className="i-icons">
        <img src="./images/github.png" alt="" />
        <img src="./images/instagram.png" alt="" />
        <img src="./images/linkedin.png" alt="" />

        
        </div>
        </div>
        

        <div className="i-right">

          <img src="./images/vector1.png" alt="" />
          <img src="./images/vector2.png" alt="" />
          <img src="./images/boy.png" alt="" />
          <img src={Imogi} alt="" />
           <div style={{left: '55%'}}>
           <Small image={Crown} text1= 'Web' text2 = 'Developer'/>
     </div>
     <div style={{top:'25rem', marginLeft:'-1rem'}}>
           <Small image={Thumb} text1= 'Best' text2 = 'Design Award'/>
     </div>
     <div className='blur' style={{background:'rgb(238 210 255)'}} >
           
     </div>
     <div className="blur2" style={{background:'#C1F5FF'}}>

     </div>
        </div>
        
        </div>
    </div>
  )
}

export default Intro