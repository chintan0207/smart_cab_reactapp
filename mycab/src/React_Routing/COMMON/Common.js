import React from "react";
import "./common.css";
import LocalTaxiIcon from "@mui/icons-material/LocalTaxi";
import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import YouTubeIcon from "@mui/icons-material/YouTube";
import { Link } from "react-router-dom";

const Common = () => {
  return (
    <>
      <div className="common-main">
        <div className="common-container">
          <div className="common-1">
            <h5>
              Smart <span>Cab</span> Point
            </h5>
            <p>We provide the best Taxi services for you</p>
            <div className="bookbtn">
              <a href="/booking#form">
                <LocalTaxiIcon /> Book Cab
              </a>
            </div>
          </div>
          <div className="common-2">
            <h5>About</h5>
            <p>
              <a href="/about#about1">About Us</a>
            </p>
            <p>
              <a href="/about#ourteam">Our Team</a>
            </p>
            <p>
            <a href="/about#ourteam">Our Drivers</a>
            </p>
          </div>
          <div className="common-3">
            <h5>Quick Links</h5>
            <p>
              <a href="/register#signup">Sign Up</a>
            </p>
            <p>
              <a href="/service#service1">Services</a>
            </p>
            <p>
              <a href="/login#signin">Sign in</a>
            </p>
          </div>
          <div className="common-4">
            <h5>Contact</h5>
            <p>cab@booking.org</p>
            <p>+185 555 878</p>
            <div className="common-icon">
              <div className="common-i">
                <FacebookIcon />
              </div>
              <div className="common-i">
                <InstagramIcon />
              </div>
              <div className="common-i">
                <LinkedInIcon />
              </div>
              <div className="common-i">
                <YouTubeIcon />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="running-taxi">
        <div class="taxi-1"></div>
        <div class="taxi-2"></div>
        <div class="taxi-3"></div>
      </div>
      <div>
        <div className="footer">
          <p>© Copyright 2023 Smart Cab Point All Rights Reserved.</p>
        </div>
      </div>
    </>
  );
};

export default Common;
