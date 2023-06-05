import React from 'react'
import "./about.css"
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import YouTubeIcon from '@mui/icons-material/YouTube';
import CallIcon from '@mui/icons-material/Call';

var DData = require('./driver.json')

const DriverTeam = () => {

  return (
    <div className="about-2" id='ourteam'>
    <h1>Our Taxi Drivers</h1>
    <p>We are at your services with Our Expert Drivers</p>
      <div className='dteam'>
   
        {DData.map((item)=>{
            return(

                <div className='dteam-member' key={item.id}>

                <img src={item.driverimg} alt=""/>
                <h5>{item.name}</h5>
                <h6>Expert Driver</h6>
    
                <div className='common-icon'>
                     <div className='common-i'>
                     <FacebookIcon/>
                     </div>
                     <div className='common-i'>
                     <InstagramIcon/>
                      
                     </div>
                     <div className='common-i'>
                     <LinkedInIcon/>
                      
                     </div>
                     <div className='common-i'>
                     <CallIcon/>
                      
                     </div>
                </div>   
            </div>





        )})}

      </div>
    
    
    </div>
  )
}

export default DriverTeam