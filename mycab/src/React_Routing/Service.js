import React from 'react'
import "./SERVICE/service.css"
import Ourservice from './SERVICE/Ourservice'
import {  Card, CardMedia, CardActions } from '@mui/material';

var Data = require('./Myapi.json')

const Service = ({addToCart}) => {

  return (
    <div>
      <div className="service-1" >
        <h1>Service</h1>
      </div>
      <Ourservice />

      <div className='servicebox py-3 px-3'>
        <h3>Enjoy our Service</h3>
        
    <div className='gridbox'>
    {Data.map((my) => {

      return <div className='a' key={my.id}>
      <Card  raised={true} className='card-size'>
      <CardMedia
          component="img"
          height="250"
          image={my.avatar_url}
          alt="GFG Logo"
      />
       
  <h6 className='heading'> {my.title}</h6>
      <h6>({my.Distance}km)</h6>
      <CardActions className='bbtn'>
      
        <button  onClick={() => addToCart(my)} className='addtobtn'>Book</button>
         
      </CardActions>
  </Card>
          <div >
     
  </div>
      </div>

    })}


  </div>
      </div>

    </div>
  )
}

export default Service