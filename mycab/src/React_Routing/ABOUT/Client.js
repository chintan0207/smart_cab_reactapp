import React from 'react'
import "./client.css"
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css"

var CData = require("./client.json")

const Client = () => {

    const Responsive = {
        superLargeDesktop: {
            // the naming can be any, depends on you.
            breakpoint: { max: 4000, min: 3000 },
            items: 6
        },
        desktop: {
            breakpoint: { max: 3000, min: 1024 },
            items: 4
        },
        tablet: {
            breakpoint: { max: 1024, min: 750 },
            items: 3
        },
        minitablet: {
            breakpoint: { max: 750, min: 550 },
            items: 2
        },
        mobile: {
            breakpoint: { max: 550, min: 0 },
            items: 1
        }
    };

    return (
        <div className='client-container'>
        <h4>Feedback</h4>
        <h1>What Our Client <span>Say's</span> </h1>

            <Carousel
            autoPlay={true}
            autoPlaySpeed={2000}
            infinite={true}
        
             className='slider-container'  responsive={Responsive}>

                {CData.map((item) => {
                    return (
                        <div className='one-client' key={item.id}>
                            <div className='client-box'>
                                <div className='client-first'>
                                    <img src={item.clientimg} alt="" />
                                    <div>
                                        <h5>{item.clientname}</h5>
                                        <p>Customer</p>
                                    </div>

                                </div>
                                <p>{item.clientp}</p>

                            </div>
                        </div>

                    )
                })}



            </Carousel>


        </div>
    )
}

export default Client