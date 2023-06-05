import React from 'react'
import Drawer from 'react-modern-drawer'
import 'react-modern-drawer/dist/index.css'
import { Link } from 'react-router-dom'
import './drawer.css'

import PersonIcon from '@mui/icons-material/Person';
import CallIcon from '@mui/icons-material/Call';
import HomeIcon from '@mui/icons-material/Home';
import LocalTaxiIcon from '@mui/icons-material/LocalTaxi';
import PeopleIcon from '@mui/icons-material/People';
const Drawerreact = (props) => {
  return (
    <div className='dr'>

      <Drawer
              open={props.open}
              onClose={props.onclose}
              direction='left'
              >


            <h4>Smart Cab Point</h4>
            
            <div className='mynav-menu' onClick={props.onclose}>
                  <li><Link to="/home"><HomeIcon />Home</Link></li>
                  <li><Link to="/about"><PeopleIcon/>About Us</Link></li>
                  <li><Link to="/service"><LocalTaxiIcon/>Service</Link></li>
                  <li><Link to="/contact"><CallIcon/>Contact</Link></li>
                  <li><Link to="/login"><PersonIcon/>Login</Link></li>
                  <li><Link to="/booking"><LocalTaxiIcon/>Book Cab</Link></li>


            </div>
      </Drawer>
    
    
    </div>
  )
}

export default Drawerreact