import React from 'react'
import BookForm from './HOME/BookForm'
import HomeSlider from './HOME/HomeSlider'
import OurTaxi from './HOME/OurTaxi'
import Client from './ABOUT/Client'
import Aboutsub3 from './ABOUT/Aboutsub3'
import Lostthings from './HOME/Lostthings'
import "./HOME/home.css"
import TaxiForm from './Form/TaxiForm'
import Aboutus2 from './ABOUT/Aboutus2'


const Home = () => {
  return (
    <div>
    <HomeSlider/>
    <Aboutus2/>
    <TaxiForm/>
    <OurTaxi/>
    <Aboutsub3/>
    <Lostthings/>
    <Client/>
    </div>
  )
}

export default Home