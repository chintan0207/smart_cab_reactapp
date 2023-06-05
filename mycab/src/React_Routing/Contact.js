import React from "react";
import "./CONTACT/contact.css"
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import { useState } from "react";
import { useFormik } from "formik";
import * as yup from "yup";
import Alert from "../React_Routing/CONTACT/Alert";
import Cdetails from "./CONTACT/Cdetails";


const Contact = () => {
  const validationSchema = yup.object({
    yourname: yup
      .string("Enter your Name")
      .required("Name is required")
      .min(4, "Name should atleast 4 charcter")
      .matches(/^([^0-9]*)$/, "donn't enter numeric Value"),

    youremail: yup
      .string("Enter your email")
      .matches(/^\S*$/, "email cannot contain whitespace")
      .email("Enter a valid email")
      .required("Email is required"),

    yoursub: yup
      .string("Enter your Name")
      .required("Name is required")
      .min(4, "Name should atleast 4 charcter")
      .matches(/^([^0-9]*)$/, "donn't enter numeric Value"),

    yourmessage: yup
      .string("Enter your Name")
      .required("Name is required")
      .min(4, "Name should atleast 4 charcter"),
  });

  const formik = useFormik({
    initialValues: {
      yourname: "",
      youremail: "",
      yoursub: "",
      yourmessage: "",
    },
    validationSchema: validationSchema,
    onSubmit: (values) => {
      alert(JSON.stringify(values, null, 2));
      showAlert("for contact us", "Thank you");
    },
  });

  //  ...................................................................

  const [alertm, setAlert] = useState(null);

  const showAlert = (message, type) => {
    setAlert({
      msg: message,
      type: type,
    });
    setTimeout(() => {
      setAlert(null);
    }, 3000);
  };

  // ..................................................................................
  return (
    <div>
    
      <div className="c1">
        <h1>Contact us </h1>
      </div>

      <div className="c3">

          <Cdetails/>
          
          <div className="c-card">
              <div className="c-left">
                <img className="cimg" src={"./drivers/d7.jpg"} alt="" />
              </div>
              <form className="c-right" onSubmit={formik.handleSubmit}>
                <h2>Contact Here...</h2>
                <Box className="cbox">
                  <TextField
                    className="cboxfield"
                    placeholder="Your Name"
                    id="YourName "
                    name="yourname"
                    value={formik.values.yourname}
                    onChange={formik.handleChange}
                    error={
                      formik.touched.yourname && Boolean(formik.errors.yourname)
                    }
                    variant="outlined"
                  />
                  <TextField
                    className="cboxfield"
                    placeholder="Your Email"
                    id="YourEmail"
                    name="youremail"
                    value={formik.values.youremail}
                    onChange={formik.handleChange}
                    error={
                      formik.touched.youremail && Boolean(formik.errors.youremail)
                    }
                    variant="outlined"
                  />
                </Box>
                <Box className="cbox2">
                  <TextField
                    className="cboxfield2"
                    placeholder="Your Subject"
                    id="yourSub"
                    name="yoursub"
                    value={formik.values.yoursub}
                    onChange={formik.handleChange}
                    error={formik.touched.yoursub && Boolean(formik.errors.yoursub)}
                    variant="outlined"
                  />
                  <textarea
                    className="form-control"
                    placeholder="Type Message..."
                    id="exampleFormControlTextarea1"
                    name="yourmessage"
                    value={formik.values.yourmessage}
                    onChange={formik.handleChange}
                    error={
                      formik.touched.yourmessage &&
                      Boolean(formik.errors.yourmessage)
                    }
                    rows="4"
                  ></textarea>
                  <Button className="cbtn" variant="contained" type="submit">
                    Send Message
                  </Button>
                </Box>
                <Alert alertm={alertm} />
              </form>
            </div>
          </div>

    </div>
  );
};

export default Contact;
