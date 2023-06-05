import React from 'react'
import Typewriter from "typewriter-effect";

const Type = () => {
  return (
    <div>
       <Typewriter
       options={{
        autoStart: true,
        loop: true,
      }}
  
       onInit={(typewriter)=> {
  
       typewriter
        
       .typeString("Welcome To Our Website")
       .pauseFor()
       .deleteAll()
       .typeString("Book Your cab ")
       .start();
       }}
       />
    </div>
  )
}

export default Type