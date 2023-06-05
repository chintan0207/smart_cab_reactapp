import React from 'react'
import Carousel from "react-multi-carousel";
import './Slider.css'
import "react-multi-carousel/lib/styles.css";


const Slider = () => {


const Responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 8
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 4
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 3
    
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 3
    }
  };


  return (
    <Carousel className='slides'  responsive={Responsive}>
  <div><img className='p1' src={'./car/car1.jpg'} alt=''/></div>
  <div><img className='p2'src={'./car/car2.jpg'} alt=''/></div>
  <div><img className='p3'src={'./car/car3.jpg'} alt=''/></div>
  <div><img className='p4'src={'./car/car4.jpg'} alt=''/></div>
  <div><img className='p5'src={'./car/car5.jpg'} alt=''/></div>
  <div><img className='p6'src={'./car/car6.jpg'} alt=''/></div>
  <div><img className='p7'src={'./car/car7.jpg'} alt=''/></div>
  <div><img className='p1' src={'./car/car1.jpg'} alt=''/></div>
  <div><img className='p2'src={'./car/car2.jpg'} alt=''/></div>
  <div><img className='p3'src={'./car/car3.jpg'} alt=''/></div>
  <div><img className='p4'src={'./car/car4.jpg'} alt=''/></div>
  <div><img className='p5'src={'./car/car5.jpg'} alt=''/></div>
  <div><img className='p6'src={'./car/car6.jpg'} alt=''/></div>
  <div><img className='p7'src={'./car/car7.jpg'} alt=''/></div>

</Carousel>
  )

}

export default Slider;