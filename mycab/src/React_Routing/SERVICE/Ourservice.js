import React from 'react'

var Sdata = require("./ourservice.json")

const Ourservice = () => {

    return (
    <div className='service'>
        <h4>Services</h4>
        <h1>Our best service for you</h1>
        
        <div className='servicecard-container'>

            {Sdata.map((item) => {
                return (
                    <div className='service-card' key={item.id}>
                        <img src={item.serviceimg} alt="" />
                        <h4>{item.sname}</h4>
                        <p>{item.sp}</p>
                        <div className='s-readmore'>
                            Read More
                        </div>
                    </div>

                )
            })}

        
        </div>
    </div>

    )
}

export default Ourservice