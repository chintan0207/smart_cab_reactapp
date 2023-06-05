import React from 'react'
import "./about.css"
import LocalTaxiRoundedIcon from '@mui/icons-material/LocalTaxiRounded';
import EngineeringRoundedIcon from '@mui/icons-material/EngineeringRounded';
import TaskAltRoundedIcon from '@mui/icons-material/TaskAltRounded';
import { FaUsers } from 'react-icons/fa';
import CountUp from 'react-countup';

const Aboutsub3 = () => {
  return (
    <div className='about-3'>
      
    <div className='about-3sub'>
       
      <div className='about-item-1'>
        <LocalTaxiRoundedIcon className='about-icons'/>
        <h1><CountUp duration={10} end={500} /></h1>
        <h4>+ Available Taxi</h4>
        
      </div>
      
      <div className='about-item-2'>
        <FaUsers className='about-icons'/>
        <h1><CountUp duration={15} end={1000} /></h1>
        <h4>+ Happy Clients</h4>
      </div>
      
      <div className='about-item-3'>
        <EngineeringRoundedIcon className='about-icons'/>
        <h1><CountUp duration={12} end={800} /></h1>
        <h4>+ Our Drivers</h4>
        
      </div>
      
      <div className='about-item-4'>
        <TaskAltRoundedIcon className='about-icons'/>
        <h1><CountUp duration={10} end={1200} /></h1>
        <h4>+ Trips Completed</h4>
      </div>
   
    </div>
    </div>

  )
}

export default Aboutsub3