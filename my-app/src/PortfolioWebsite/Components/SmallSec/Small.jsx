import React from 'react'
import './Small.css'

function Small({image,text1, text2}) {
  return (
   <div className="small">
    <img src={image} alt="hi" />
   
       {text1} 
      <br/>
      {text2}
  
   </div>
  )
}

export default Small