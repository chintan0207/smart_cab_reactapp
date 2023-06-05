import React from "react";
import "./Form.css";


import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";

import Radio from "@mui/material/Radio";
import RadioGroup from "@mui/material/RadioGroup";
import FormControl from "@mui/material/FormControl";
import FormControlLabel from "@mui/material/FormControlLabel";

import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import Select from "@mui/material/Select";

import dayjs from "dayjs";
import { DemoContainer, DemoItem } from "@mui/x-date-pickers/internals/demo";
import { LocalizationProvider } from "@mui/x-date-pickers";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";

import { MobileTimePicker } from "@mui/x-date-pickers/MobileTimePicker";

import { MobileDatePicker } from "@mui/x-date-pickers/MobileDatePicker";
import Type from "../HOME/Type";

import Button from "@mui/material/Button";
import { useState } from "react";
import { useFormik } from 'formik';
import * as yup from 'yup';


const BookForm = () => {

    

    const validationSchema = yup.object({
        name: yup 
          .string('Enter your Name')
          .required('Name is required')
          .min(4,'Name should atleast 4 charcter')
          .matches((/^([^0-9]*)$/),"donn't enter numeric Value"),
        //   .matches(/^\S*$/, 'Username cannot contain whitespace'),


        mobile: yup
          .string('Enter your mobile no')
        //   .matches((/^([^A-Z]*)$/),"dont't allow Numeric Value")
          .matches(/^\S*$/, 'Mobile no cannot contain whitespace')
          .min(10,'Mobile no should be 10 Number')
          .max(12,'Mobile no should be 10 Number')
          .required('Mobile no is required')
          .matches(/^(\+?\d{1,3}[- ]?)?\d{10}$/, 'mobile number is not valid'),

          
        email: yup
          .string('Enter your email')
          .matches(/^\S*$/, 'email cannot contain whitespace')
          .email('Enter a valid email')
          .required('Email is required'),

        pickuppoint: yup
           .string('enter pickup point')
           .matches((/^([^0-9]*)$/),"donn't enter numeric Value")
           .required('enter pickup point'),
        droppoint: yup
           .string('enter drop point')
           .matches((/^([^0-9]*)$/),"donn't enter numeric Value")
           .required('enter drop point'),

        stayhour: yup
           .string('enter stay hour ')
           .required('enter stay hour')
           .matches((/^([0-9]*)$/),"donn't enter string"),

        });
    const formik = useFormik({
        initialValues: {
          name: '',
          mobile: '',
          email:'',
          picked:'',
          pickuppoint:'',
          droppoint:'',
          pickupdate:'',
          droptime:'',
        },
        validationSchema: validationSchema,
        onSubmit:  (values) => {
          alert(JSON.stringify(values, null, 2));
        },
    
      });

    
  return (
    <div id="bt" className="main">
      <h1>
        <Type />
      </h1>
      
      <form className="f1 my-2" onSubmit={formik.handleSubmit}>
        <div className="maint">
          <Box
            className="tfield"
            component="form"
            noValidate
            autoComplete="off"
          >
            <TextField
              className="textf"
              id="name"
              name="name"
              label="Name"
              value={formik.values.name}
              onChange={formik.handleChange}
              error={formik.touched.name && Boolean(formik.errors.name)}
              helperText={formik.touched.name && formik.errors.name}
              variant="outlined"
            />

            <TextField
              className="textf"
              id="mobile"
              label="Mobile No"
              name="mobile"
              value={formik.values.mobile}
              onChange={formik.handleChange}
              error={formik.touched.mobile && Boolean(formik.errors.mobile)}
              helperText={formik.touched.mobile && formik.errors.mobile}
              variant="outlined"
            />

            <TextField
              className="textf"
              id="email"
              name="email"
              label="Email Id"
              value={formik.values.email}
              onChange={formik.handleChange}
              error={formik.touched.email && Boolean(formik.errors.email)}
              helperText={formik.touched.email && formik.errors.email}
              variant="outlined"
            />
          </Box>
        </div>

        {/*........................Radio button start.............................................*/}

        <FormControl className="mainr">
          <RadioGroup
            className="rfield"
            row
            aria-labelledby="demo-row-radio-buttons-group-label"
            name="row-radio-buttons-group"
          >
            <FormControlLabel
              className="radiof"
              name="picked"
              
              control={<Radio />}
              label="Single Trip"
              value="Single Trip"
            />
            <FormControlLabel
              className="radiof"
              
              name="picked"
              control={<Radio />}
              label="Round Trip"
              value="Round Trip"
              
            />
          </RadioGroup>
        </FormControl>

        {/*........................Pickup and Drop point start.............................................*/}

        <div className="dp1">
          <Box className="box3">
          <TextField
          className="textf"
          id="Pickup point"
          name="pickuppoint"
          label="Pickup point"
          value={formik.values.pickuppoint}
          onChange={formik.handleChange}
          error={formik.touched.pickuppoint && Boolean(formik.errors.pickuppoint)}
          helperText={formik.touched.pickuppoint && formik.errors.pickuppoint}
          variant="outlined"
        />
          </Box>

          <Box className="box3">
          <TextField
          className="textf"
          id="Drop point"
          name="droppoint"
          label="Drop point"
          value={formik.values.droppoint}
          onChange={formik.handleChange}
          error={formik.touched.droppoint && Boolean(formik.errors.droppoint)}
          helperText={formik.touched.droppoint && formik.errors.droppoint}
          variant="outlined"
        />
          </Box>
        </div>

        {/*........................Pickup Date and Drop time start.............................................*/}

        <div className="dt">
        <LocalizationProvider dateAdapter={AdapterDayjs}>
        <DemoContainer components={['DatePicker','MobileDatePicker',]}>
          <DemoItem>
             <MobileDatePicker 
              label="Pickup Date"
              name='pickupdate'
              
              />
           </DemoItem>
        </DemoContainer>
        </LocalizationProvider>
      
          <LocalizationProvider dateAdapter={AdapterDayjs}>
            <DemoContainer components={["TimePicker", "MobileTimePicker"]}>
              <DemoItem>
                <MobileTimePicker         
                  label="Drop Time"
                  name='droptime'    
                />
              </DemoItem>
            </DemoContainer>
          </LocalizationProvider>
        </div>

        {/*........................stay hour,no of passanger,luggage start.............................................*/}
        <div className="staypass">
          <TextField
          className="box"
          id="Stayhour"
          name="stayhour"
          label="Stayhour"
          value={formik.values.stayhour}
          onChange={formik.handleChange}
          error={formik.touched.stayhour && Boolean(formik.errors.stayhour)}
          helperText={formik.touched.stayhour && formik.errors.stayhour}
          variant="outlined"
        />
           
          <Box className="box">
            <FormControl fullWidth>
              <InputLabel id="demo-simple-select-label">Passanger</InputLabel>
              <Select
                labelId="demo-simple-select-label"
                id="demo-simple-select"
                label="Passanger"
              >
                <MenuItem value={1}>1</MenuItem>
                <MenuItem value={2}>2</MenuItem>
                <MenuItem value={3}>3</MenuItem>
                <MenuItem value={4}>4</MenuItem>
                <MenuItem value={5}>5</MenuItem>
                <MenuItem value={6}>6</MenuItem>
                <MenuItem value={7}>7</MenuItem>
                <MenuItem value={8}>8</MenuItem>
                <MenuItem value={9}>9</MenuItem>
                <MenuItem value={10}>10</MenuItem>
              </Select>
            </FormControl>
          </Box>

          <Box className="box">
            <FormControl fullWidth>
              <InputLabel id="demo-simple-select-label">Luggage</InputLabel>
              <Select
                labelId="demo-simple-select-label"
                id="demo-simple-select"
                label="Luggage"
              >
                <MenuItem value={1}>1</MenuItem>
                <MenuItem value={2}>2</MenuItem>
                <MenuItem value={3}>3</MenuItem>
                <MenuItem value={4}>4</MenuItem>
                <MenuItem value={5}>5</MenuItem>
                <MenuItem value={6}>6</MenuItem>
                <MenuItem value={7}>7</MenuItem>
                <MenuItem value={8}>8</MenuItem>
                <MenuItem value={9}>9</MenuItem>
                <MenuItem value={10}>10</MenuItem>
              </Select>
            </FormControl>
          </Box>
        </div>

        {/*........................Button start.............................................*/}

        <div className="btn py-3">
          <Button variant="contained" type="submit">
            Book
          </Button>
        </div>
      </form>
      
      
  
    </div>
  );
};

export default BookForm;
