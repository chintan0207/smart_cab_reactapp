import React from 'react'
import "./Ourtaxi.css"

var OurData = require("./ourtaxi.json")


const OurTaxi = () => {
  return (
    <div className='ourtaxi-container'>
        
        <h4>Our Taxi</h4>
        <h1>Let's check Available Taxi</h1>
        <div className='ourtaxi-btn'>
            <div className='cbtn'>Normal Taxi </div>
            <div className='cbtn'>Town Taxi </div>
            <div className='cbtn'>SUV Taxi </div>
            <div className='cbtn'>Limousine taxi </div>


        </div>
        <div className='taxi-type'>

        {OurData.map((item)=>{
          return(

            <div className='onetaxi-type' key={item.id}>
            <img src={item.taxiimg} alt=""/>
            <div className='rate'>
              <h6>Base Rate : {item.base_rate}₹</h6>
            </div>
            <div className='rate'>
              <h6>Per Km Rate : {item.per_km}₹</h6>
            </div>
            <div className='rate'>
              <h6>Class : {item.class}</h6>
            </div>

         </div>


        )})}
         
          
        </div>
    
    </div>
  )
}

export default OurTaxi