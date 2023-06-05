import React from 'react'
import "./CART/cart.css"
import { useEffect, useState } from 'react';


const Cart = ({ cart }) => {
  const [CART, setCART] = useState([])

  useEffect(() => {
    setCART(cart)
  }, [cart])
  return (
    <div className='tripcard-container'>
      {CART.map((cartitem) => {
        return (

          <div className="card trip-card" >
          <img src={cartitem.avatar_url} className="card-img-top" alt="..."/>
          <div class="card-body">
            <h6 class="card-title">{cartitem.title}</h6>
            <h6>{cartitem.Distance} Km</h6>
          </div>
        </div>

        )
      })}



    </div>
  )
}

export default Cart