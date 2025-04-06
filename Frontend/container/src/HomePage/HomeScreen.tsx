import React from "react";
import "./HomeScreen.css";
import HomeSection1 from "../HomeSection1/HomeSection1";
import HomeSection2 from "../HomeSection2/HomeSection2";
import HomeSection3 from "../HomeSection3/HomeSection3";
import FooterComponent from "../Footer";
import { Link } from "react-router-dom";


const HomeScreen = () => {
  return (
    <>
      <div className="homescreenpage">
        <div className="homescreenpageinnerdiv">
          <div className="homescreenContent">
            <p className="homescreenheading" style={{color:'black', fontSize:'2rem',width:'100%', textAlign:'center'}}>
              Unlock your next advanture with seamless travel planning
            </p>
            <Link to='/signup'> <button className="homescreenbutton">View Packages</button></Link>
          </div>
          <input
            className="homescreeninput"
            type="text"
            placeholder="Search the Destination"
          ></input>
          <div className="homescreenimgbotton">
            <p className="homescreenlocationrecommodation" style={{color:'black'}}>
              Recommended Location:
            </p>
            <button className="btnlocation">New Zealand</button>
          </div>
        </div>
      </div>
      <HomeSection1 />
      <HomeSection2 />
      <HomeSection3 />
      <FooterComponent />
    </>
  );
};

export default HomeScreen;
