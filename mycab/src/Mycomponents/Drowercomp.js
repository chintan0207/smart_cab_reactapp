import React, { useState } from 'react'
import './mynavbar.css'
import { Link } from 'react-router-dom'
import MailIcon from '@mui/icons-material/Mail';
import LoginIcon from '@mui/icons-material/Login';
import PersonIcon from '@mui/icons-material/Person';
import CallIcon from '@mui/icons-material/Call';
import HomeIcon from '@mui/icons-material/Home';
import LocalTaxiIcon from '@mui/icons-material/LocalTaxi';
import PeopleIcon from '@mui/icons-material/People';

import {Drawer, List, ListItemButton, ListItem, ListItemIcon, ListItemText} from '@mui/material';
const Drowercomp = (props) => {


  return (
    
<React.Fragment>
    <Drawer className='drawer'
       open={props.condition}
       onClose={props.convertFalse}>
       <List >
          <ListItemButton >
            
             <ListItemIcon onClick={props.convertFalse}   className='drower-list'>

             <ListItemText><h4>Smart Cab Point</h4></ListItemText>

               <ListItemText><li><Link to="/home"><HomeIcon/>Home</Link></li> </ListItemText>
               <ListItemText><li><Link to="/about"><PeopleIcon/>About</Link></li></ListItemText>
               <ListItemText><li><Link to="/service"><LocalTaxiIcon/>Service</Link></li></ListItemText>
               <ListItemText><li><Link to="/contact"><CallIcon/>Contact</Link></li></ListItemText>
               <ListItemText><li><Link to="/login"><PersonIcon/>Login</Link></li></ListItemText>

             </ListItemIcon>
          
          </ListItemButton>
       </List>
    </Drawer>
</React.Fragment>


  )
}

export default Drowercomp