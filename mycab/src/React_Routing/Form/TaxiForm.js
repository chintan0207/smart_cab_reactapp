import React from 'react'
import "./taxiform.css"
import {  useFormik } from 'formik';
import * as yup from 'yup';

import {useNavigate} from "react-router-dom"

import Map from './Map';

const TaxiForm = () => {

    const navigate = useNavigate();
    const validationSchema = yup.object({
        name: yup
            .string('* Enter your Name')
            .required('* Name is required')
            .matches((/^([^0-9]*)$/), "* donn't enter numeric Value")
            .min(4, '* Name should atleast 4 charcter'),

        email: yup
            .string('* Enter your email')
            .matches(/^\S*$/, '* email cannot contain whitespace')
            .email('* Enter a valid email')
            .required('* Email is required'),

        mobile: yup
            .string('* Enter your mobile no')
            .matches(/^\S*$/, '* Mobile no cannot contain whitespace')
            .min(10, '* Mobile no should be 10 Number')
            .max(12, '* Mobile no should be 10 Number')
            .required('* Mobile no is required')
            .matches(/^(\+?\d{1,3}[- ]?)?\d{10}$/, '* Mobile number is not valid'),

        pickuppoint: yup
            .string('* enter pickup point')
            .matches((/^([^0-9]*)$/), "* donn't enter numeric Value")
            .required('* Enter pickup point'),

        droppoint: yup
            .string('* Enter drop point')
            .matches((/^([^0-9]*)$/), "* donn't enter numeric Value")
            .required('* Enter drop point'),

        pickupdate: yup
            .string('* Select pickup date')
            .required('* Select pickup date'),

        pickuptime: yup
            .string('* Select pickup time')
            .required('* Select pickup time'),

        selecttaxi: yup
            .string('* Select taxi')
            .required('* Select taxi'),
        
        numofpass: yup
            .string('* Select number of passangers')
            .required('* Select number of passangers'),


    });

    const formik = useFormik({
        initialValues: {
            name: '',
            email: '',
            mobile: '',
            pickuppoint: '',
            droppoint: '',
            pickupdate: '',
            pickuptime: '',
            selecttaxi:'',
            numofpass:'',


        },
        
        validationSchema: validationSchema,
        onSubmit: async (values, action) => {
            const response= await fetch('http://localhost:3005/demo',{
                method:'POST',
                body:JSON.stringify(values),
                headers:{
                   'Content-Type':'application/json'
                }
            })
            const data = await response.json();
            console.log(data)
            console.log(values)
            alert(JSON.stringify(values, null, 2));
       
            action.resetForm();
        },

    });

    return (
        <div className='form-container'>
          
            <div className='form-right'>
                <h4>Online Booking</h4>
                <h1>Book Your Taxi</h1>
                <form className='mainform' onSubmit={formik.handleSubmit}>

                    <span>

                        <input
                            type='text'
                            name="name"
                            id="name"
                            placeholder='Your Name'
                            value={formik.values.name}
                            onChange={formik.handleChange}
                            error={formik.touched.name && Boolean(formik.errors.name)}
                            helperText={formik.touched.name && formik.errors.name}
                        />
                        {formik.errors.name && formik.touched.name ?
                            <p className='form-error'>{formik.errors.name}</p> : null}
                    </span>
                    <span>
                        <input
                            type='text'
                            name='email'
                            id='email'
                            placeholder='Email Id'
                            value={formik.values.email}
                            onChange={formik.handleChange}
                        />
                        {formik.errors.email && formik.touched.email ?
                            <p className='form-error'>{formik.errors.email}</p> : null}
                    </span>

                    <span>

                        <input
                            type='text'
                            name="mobile"
                            id='mobile'
                            placeholder='Mobile No'
                            value={formik.values.mobile}
                            onChange={formik.handleChange}

                        />
                        {formik.errors.mobile && formik.touched.mobile ?
                            <p className='form-error'>{formik.errors.mobile}</p> : null}

                    </span>

                    <span>
                    <select type='select' name="selecttaxi" id='selecttaxi' 
                            value={formik.values.selecttaxi}
                            onChange={formik.handleChange}
                            >
                        <option value="">Select Taxi</option>
                        <option value="Normal Taxi"><p>Normal Taxi</p></option>
                        <option value="Town Taxi">Town Taxi</option>
                        <option value="Suv Taxi">Suv Taxi</option>
                        <option value="Limousine Taxi">Limousine Taxi</option>

                    </select>
                    
                    {formik.errors.selecttaxi && formik.touched.selecttaxi ?
                        <p className='form-error'>{formik.errors.selecttaxi}</p> : null}
                    
                    </span>

                    <span>
                    
                    <select type='select' name='numofpass' id='numofpass'
                
                            value={formik.values.numofpass}
                            onChange={formik.handleChange}>
                        <option value="">Num of Passangers</option>
                        <option value="1">1</option>
                        <option value="2">2</option>
                        <option value="3">3</option>
                        <option value="4">4</option>
                        <option value="5">5</option>
                        <option value="6">6</option>
                        <option value="7">7</option>
                        <option value="8">8</option>
                        <option value="9">9</option>
                        <option value="10">10</option>

                    </select>
                    {formik.errors.numofpass && formik.touched.numofpass ?
                        <p className='form-error'>{formik.errors.numofpass}</p> : null}
                    
                    </span>


                    <span>
                        <input
                            type='text'
                            name='pickuppoint'
                            id="pickuppoint"
                            placeholder='Start Destination'
                            value={formik.values.pickuppoint}
                            onChange={formik.handleChange}

                        />
                        {formik.errors.pickuppoint && formik.touched.pickuppoint ?
                            <p className='form-error'>{formik.errors.pickuppoint}</p> : null}


                    </span>

                    <span>
                        <input
                            type='text'
                            name='droppoint'
                            id='droppoint'
                            placeholder='End Destination'
                            value={formik.values.droppoint}
                            onChange={formik.handleChange}

                        />
                        {formik.errors.droppoint && formik.touched.droppoint ?
                            <p className='form-error'>{formik.errors.droppoint}</p> : null}

                    </span>

                    <span>
                        <input
                            type='date'
                            name='pickupdate'
                            id='pickupdate'
                            placeholder='Select Date'
                            value={formik.values.pickupdate}
                            onChange={formik.handleChange}

                        />
                        {formik.errors.pickupdate && formik.touched.pickupdate ?
                            <p className='form-error'>{formik.errors.pickupdate}</p> : null}


                    </span>

                    <span>
                        <input
                            type='time'
                            name='pickuptime'
                            id='pickuptime'
                            placeholder='Select Time'
                            value={formik.values.pickuptime}
                            onChange={formik.handleChange}

                        />
                        {formik.errors.pickuptime && formik.touched.pickuptime ?
                            <p className='form-error'>{formik.errors.pickuptime}</p> : null}

                    </span>
                    

                    <button className='fsubmit-btn' type="submit" onClick={() => { console.log("click") }}>Submit</button>

                </form>
            </div>

        </div>
    )
}


export default TaxiForm