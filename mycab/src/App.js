import { Route,BrowserRouter as Router, Routes } from "react-router-dom";
import Mynavbar from "./Mycomponents/Mynavbar";
import Home from "./React_Routing/Home";
import About from "./React_Routing/About";
import Service from "./React_Routing/Service";
import Contact from "./React_Routing/Contact";
import Login from "./Mycomponents/LOGIN/Login";
import Register from "./Mycomponents/LOGIN/Register";
import Common from "./React_Routing/COMMON/Common";
import ScrollToTop from "react-scroll-to-top";
import NorthIcon from '@mui/icons-material/North';
import "./React_Routing/HOME/home.css"
import TaxiBookForm from "./React_Routing/TaxiBookForm";
import Cart from "./React_Routing/Cart";
import { useState } from 'react';



function App() {

  const [cart, setCart] = useState([])
  const addToCart = (data) => {
    setCart([...cart, { ...data, quantity: 1 }])
  }


  return (
    <div className="App">      
          <Router>
            <Mynavbar  count={cart.length}/>
              <Routes>
                <Route path="/" element={<Home/>}/> 
                <Route path="/home" element={<Home/>}/> 
                <Route path="/about" element={<About/>}/> 
                <Route path="/service" element={<Service addToCart={addToCart}/>}/> 
                <Route path="/contact" element={<Contact/>}/> 
                <Route path="/cart" element={<Cart  cart={cart}/>}/> 
                <Route path="/login" element={<Login/>}/>
                <Route path="/register" element={<Register/>}/>
                <Route path="/booking" element={<TaxiBookForm/>}/>
              </Routes>
              <ScrollToTop  smooth component={<i><NorthIcon className='si'/></i>}/>
              <Common/>
          </Router>
    </div>
  );}

export default App;
