import React from 'react'
import './mynavbar.css'
import './drawer.css'
import { Link } from 'react-router-dom'
import { FaUserCircle } from "react-icons/fa";
import { HiMenu } from "react-icons/hi";
import {BsCart4}  from "react-icons/bs"
// import { useState } from 'react';
import Drawerreact from './Drawerreact'
import LocalTaxiIcon from '@mui/icons-material/LocalTaxi';
// import { AiFillCar } from 'react-icons/ai';


const Mynavbar = (props) => {

  const [isOpen, setIsOpen] = React.useState(false)
  const toggleDrawer = () => {
      setIsOpen((prevState) => !prevState)
  }


  return (
  <div>
     
    <div className='navbar'>
    <div className='logo'>
      <h5> Smart <span>Cab</span> Point</h5>
    </div>
    
    <div  className="list">
       <li className='l'><Link to="/home">Home</Link></li>
       <li className='l'><Link to="/about">About</Link></li>
       <li className='l'><Link to="/service">Service</Link></li>
       <li  className='l'><Link to="/contact">Contact</Link></li>
       <li><Link  to="/booking"> <div className='bookbtn'>
       <LocalTaxiIcon/> Book Cab
      </div></Link></li>
      
    </div>
   
    <div className='icon'>
    <i className='i1'><Link to="/cart"><BsCart4/><sup>{props.count}</sup></Link></i>
    <i className='i2' ><Link to='/login'><FaUserCircle/></Link></i>
    <i className='i3' onClick={toggleDrawer}><HiMenu/></i>

    
    </div>
    
  </div>
      <div className='drawer'>
      <Drawerreact open={isOpen} onclose={toggleDrawer}/>
        
      </div>

     </div>
    
  )
}

export default Mynavbar