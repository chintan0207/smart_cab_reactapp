import React from 'react'
import './contact.css'
import FmdGoodRoundedIcon from '@mui/icons-material/FmdGoodRounded';
import AccessAlarmsRoundedIcon from "@mui/icons-material/AccessAlarmsRounded";
import AttachEmailRoundedIcon from '@mui/icons-material/AttachEmailRounded';
import PhoneInTalkRoundedIcon from '@mui/icons-material/PhoneInTalkRounded';

const Cdetails = () => {
  return (
    <div className="c2">
    <div className="c2-cards">
      <div className="c-iconbox">
        <FmdGoodRoundedIcon fontSize="large" className="c-icon" />
      </div>
      <h4>Office Address</h4>
      <h6>Vadodara</h6>
    </div>
    <div className="c2-cards">
      <div className="c-iconbox">
        <AccessAlarmsRoundedIcon fontSize="large" className="c-icon" />
      </div>
      <h4>Open Time </h4>
      <h6>Mon - Sat(10.00AM - 5.30PM)</h6>
    </div>
    <div className="c2-cards">
      <div className="c-iconbox">
        <AttachEmailRoundedIcon fontSize="large" className="c-icon" />
      </div>
      <h4> Email Us</h4>
      <h6>cab@booking.com</h6>
    </div>
    <div className="c2-cards">
      <div className="c-iconbox">
        <PhoneInTalkRoundedIcon fontSize="large" className="c-icon" />
      </div>
      <h4> Call Us</h4>
      <h6>+91 124 256 789</h6>
    </div>
  </div>

  )
}

export default Cdetails