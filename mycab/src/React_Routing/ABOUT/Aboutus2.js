import React from 'react'
import "./aboutus2.css"
import { Link } from 'react-router-dom'


const Aboutus2 = () => {
  return (
    <div className="aboutus2">
        <div className="a2left">
          <img className='t' src={"./scard/car-big-2.png"} alt="" />
        </div>
        <div className="a2right">
          <p className="p3">About Us</p>
          <h2>We Provide Trusted Cab Service In The World</h2>
          <p className="p4">
            Welcome to our Smart cab Point! We are a team of
            passionate individuals dedicated to providing safe, reliable, and
            convenient transportation services to our customers.
          </p>
          <div className="morebtn2"><a href="/about#about1">Discover More</a></div>
        </div>
      </div>

  )
}

export default Aboutus2