import React from 'react'
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { Link } from 'react-router-dom'
import './Hslider.css'
import { useState, useEffect } from 'react';

const HomeSlider = () => {

  const [isAnimated, setIsAnimated] = useState(false);

  const handleslidechange = () =>{ 
    setIsAnimated(true);
  }

  useEffect(() => {
    
    setIsAnimated(true);

  }, []);


  const Responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 1
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 1
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 1
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1
    }
  };
  return (
    <Carousel
      afterChange={handleslidechange}
      autoPlay={true}
      autoPlaySpeed={3000}
      infinite={true}
      showDots={true}
      className='hs' responsive={Responsive}>
      <div><div className='p1'>

        <h5 className={isAnimated ? 'animate' : ''}>WELCOME TO SMART CAB !</h5>

        <h1 className={isAnimated ? 'animate' : ''}>BOOK <span>TAXI</span> FOR YOUR RIDE</h1>
        <div className={isAnimated ? 'animate homeaboutbtn' : 'homeaboutbtn'}>
          <div className='homebtn2'>
            <Link to="/about">About Us</Link>
          </div>
          <div className='homebtn2'>
            <Link to="/about">Learn More</Link>

          </div>
        </div>


      </div></div>

      <div><div className='p2'>

        <h5 className={isAnimated ? 'animate' : ''}>WELCOME TO SMART CAB !</h5>

        <h1 className={isAnimated ? 'animate' : ''}>BOOK <span>TAXI</span> FOR YOUR RIDE</h1>
        <div className={isAnimated ? 'animate homeaboutbtn' : 'homeaboutbtn'}>
          <div className='homebtn2'>
            <Link to="/about">About Us</Link>
          </div>
          <div className='homebtn2'>
            <Link to="/about">Learn More</Link>

          </div>
        </div>

      </div> </div>
      <div><div className='p3'>

      <h5 className={isAnimated ? 'animate' : ''}>WELCOME TO SMART CAB !</h5>

        <h1 className={isAnimated ? 'animate' : ''}>BOOK <span>TAXI</span> FOR YOUR RIDE</h1>
        <div className={isAnimated ? 'animate homeaboutbtn' : 'homeaboutbtn'}>
          <div className='homebtn2'>
            <Link to="/about">About Us</Link>
          </div>
          <div className='homebtn2'>
            <Link to="/about">Learn More</Link>

          </div>
        </div>

      </div> </div>
      <div><div className='p4'>

      <h5 className={isAnimated ? 'animate' : ''}>WELCOME TO SMART CAB !</h5>

        <h1 className={isAnimated ? 'animate' : ''}>BOOK <span>TAXI</span> FOR YOUR RIDE</h1>
        <div className={isAnimated ? 'animate homeaboutbtn' : 'homeaboutbtn'}>
          <div className='homebtn2'>
            <Link to="/about">About Us</Link>
          </div>
          <div className='homebtn2'>
            <Link to="/about">Learn More</Link>

          </div>
        </div>

      
      </div> </div>
      <div><div className='p5'>

      <h5 className={isAnimated ? 'animate' : ''}>WELCOME TO SMART CAB !</h5>

        <h1 className={isAnimated ? 'animate' : ''}>BOOK <span>TAXI</span> FOR YOUR RIDE</h1>
        <div className={isAnimated ? 'animate homeaboutbtn' : 'homeaboutbtn'}>
          <div className='homebtn2'>
            <Link to="/about">About Us</Link>
          </div>
          <div className='homebtn2'>
            <Link to="/about">Learn More</Link>

          </div>
        </div>
      
      </div></div>
      <div><div className='p6'>

      <h5 className={isAnimated ? 'animate' : ''}>WELCOME TO SMART CAB !</h5>

        <h1 className={isAnimated ? 'animate' : ''}>BOOK <span>TAXI</span> FOR YOUR RIDE</h1>
        <div className={isAnimated ? 'animate homeaboutbtn' : 'homeaboutbtn'}>
          <div className='homebtn2'>
            <Link to="/about">About Us</Link>
          </div>
          <div className='homebtn2'>
            <Link to="/about">Learn More</Link>

          </div>
        </div>
      
      </div></div>

    </Carousel>)
}
export default HomeSlider;