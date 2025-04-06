import React from "react";
import "./HomeSection1.css";
import FlagIcon from "@mui/icons-material/Flag";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import ExitToAppIcon from "@mui/icons-material/ExitToApp";
import ExploreIcon from "@mui/icons-material/Explore";

const HomeSection1 = () => {
  return (
    <>
      <div className="Homesectionmaincontent">
        <p className="homesectionsteps">3 Steps of the Perfect Tour</p>
        <div className="homesectionadventutres">
          <p>Your gateway to seamless journeys and</p>
          <p>unforgettable adventures</p>
        </div>
      </div>

      <div className="homesectionsolumnmainupper">
        <div className="homesectionsolumnmain">
          <div className="homesectioncolum1 box" style={{height:'7rem'}}>
            <FlagIcon />
            <p>Tell us What You Want To Do</p>
          </div>

          <div className="homesectioncolum2 box" style={{height:'7rem'}}>
            <LocationOnIcon />
            <p>Share Your Travel Locatin</p>
          </div>

          <div className="homesectioncolum3 box">
            <ExitToAppIcon />
            <p>Share Your Travel Preference</p>
          </div>

          <div className="homesectioncolum4 box">
            <ExploreIcon />
            <p>We Are Trusted Agency</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default HomeSection1;
