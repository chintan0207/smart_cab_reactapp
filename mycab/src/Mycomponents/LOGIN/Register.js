import React from 'react'
import "./loginRegister.css"

import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";

import IconButton from "@mui/material/IconButton";

import OutlinedInput from "@mui/material/OutlinedInput";
import InputLabel from "@mui/material/InputLabel";
import InputAdornment from "@mui/material/InputAdornment";
import FormControl from "@mui/material/FormControl";
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';

import Visibility from "@mui/icons-material/Visibility";
import VisibilityOff from "@mui/icons-material/VisibilityOff";


import { Link } from 'react-router-dom';
import { AiOutlineArrowLeft } from "react-icons/ai";

import { useFormik } from 'formik';
import * as yup from 'yup';

const Register = () => {

/*.................... for showPassword............................*/

  const [showPassword, setShowPassword] = React.useState(false);

  const handleClickShowPassword = () => setShowPassword((show) => !show);

  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };


/*.................... for validation.................................*/

const validationSchema = yup.object({
  
 name: yup 
  .string('Enter your Name')
  .required('Name is required')
  .min(4,'Name should atleast 4 charcter')
  .matches((/^([^0-9]*)$/),"donn't enter numeric Value"),

 mobile: yup
  .string('Enter your mobile no')
  .matches(/^\S*$/, 'Mobile no cannot contain whitespace')
  .matches((/^([0-9]*)$/),"enter only numeric Value")
  .min(10,'Mobile no should be 10 Number')
  .max(12,'Mobile no should be 10 Number')
  .required('Mobile no is required')
  .matches(/^(\+?\d{1,3}[- ]?)?\d{10}$/, 'mobile number is not valid'),

  
 email: yup
  .string('Enter your email')
  .matches(/^\S*$/, 'email cannot contain whitespace')
  .email('Enter a valid email')
  .required('Email is required'),

 password: yup
   .string('Enter the password')
   .min(8,'password atleast 8 charcter')
   .required('password is required'),

 cpass: yup
    .string('Re-enter the password')
    .required('confirm password is required')
    .oneOf([yup.ref("password"), null],'Password must be match'),

  termsAndConditions: yup
    .boolean()
    .oneOf([true], "You must accept the terms and conditions")
    .required("You must accept the terms and conditions"),

});


const formik = useFormik({

  initialValues:{
    name:'',
    mobile:'',
    email:'',
    password:'',
    cpass:'',
    termsAndConditions: false,

    
  },
  validationSchema: validationSchema,
  onSubmit: (values) => {
    alert(JSON.stringify(values , null, 2))
  },

});

  return (
    <div className='R1'>
    
    <form className='registerf' onSubmit={formik.handleSubmit}>
     <i className='arrowback'><Link to='/login'><AiOutlineArrowLeft/></Link></i>
     <h1>Register</h1>
     <div className='rtext'>
        <TextField
          className='t1'
          name="name"
          label="Name"
          id="name"
          value={formik.values.name}
          onChange={formik.handleChange}
          error={formik.touched.name && Boolean(formik.errors.name)}
          helperText={formik.touched.name && formik.errors.name}
          variant="outlined"/>
        <TextField
          className='t1'
          name="mobile"
          label="Mobile No"
          id="mobile"
          value={formik.values.mobile}
              onChange={formik.handleChange}
              error={formik.touched.mobile && Boolean(formik.errors.mobile)}
              helperText={formik.touched.mobile && formik.errors.mobile}
          variant="outlined"/>
        <TextField
        className='t1'
        name="email"
        label="Email"
        id="email"
        value={formik.values.email}
        onChange={formik.handleChange}
        error={formik.touched.email && Boolean(formik.errors.email)}
        helperText={formik.touched.email && formik.errors.email}
        variant="outlined"/>

        <TextField className="t1" label="Password" placeholder="Password"
        // id="password"
        name="password"
        value={formik.values.password}
        onChange={formik.handleChange}
        error={formik.touched.password && Boolean(formik.errors.password)}
        helperText={formik.touched.password && formik.errors.password} 
        id="outlined-adornment-password"
        type={showPassword ? 'text' : 'password'}
          InputProps={{
          endAdornment:(
            <InputAdornment position="end">
              <IconButton
                aria-label="toggle password visibility"
                onClick={handleClickShowPassword}
                onMouseDown={handleMouseDownPassword}
                edge="end"
              >
                {showPassword ? <VisibilityOff /> : <Visibility />}
              </IconButton>
            </InputAdornment>
          ),
        }} />

        <TextField
          className='t1'
          type='password'
          name="cpass"
          label="Confirm Password"
          id="cpass"
          value={formik.values.cpass}
          onChange={formik.handleChange}
          error={formik.touched.cpass && Boolean(formik.errors.cpass)}
          helperText={formik.touched.cpass && formik.errors.cpass}
          variant="outlined"/>

        <FormControlLabel control={<Checkbox/>} 
           label="Terms & Condition"
           type='checkbox'
           name='termsAndConditions'
           id='termsAndConditions'
           value={formik.values.termsAndConditions}
           onChange={formik.handleChange}
           error={formik.touched.termsAndConditions && Boolean(formik.errors.termsAndConditions)}
           helperText={formik.touched.termsAndConditions && formik.errors.termsAndConditions}  />
        <button className='registerbtn my-3' type="submit">
         Submit
        </button>
     </div>
       
    </form>
  
    
    </div>
  )
}

export default Register