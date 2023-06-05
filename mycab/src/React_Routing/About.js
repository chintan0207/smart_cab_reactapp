import React from "react";
import "./ABOUT/about.css";
import Aboutsub3 from "./ABOUT/Aboutsub3";
import DriverTeam from "./ABOUT/DriverTeam";
import Client from "./ABOUT/Client";

const About = () => {
  return (
    <div>
      <div className="about-1" id="about1" >
        <h1>About Us</h1>
      </div>
      <div className="aboutus">
        <div className="aright">
          <img src={"./drivers/d8.jpg"} alt="" />
        </div>
        <div className="aleft">
          <p className="p1">Few words about Smart Cab Point</p>
          <h1>Learn about Our Taxi Company</h1>
          <p className="p2">
            Welcome to our Smart cab Point! We are a team of
            passionate individuals dedicated to providing safe, reliable, and
            convenient transportation services to our customers.
          </p>
          <div className="morebtn">Discover More</div>
        </div>
      </div>

      <DriverTeam />
      
      <Client/>
              

    </div>
  );
};

export default About;
