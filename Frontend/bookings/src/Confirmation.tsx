import React from "react";
import "./Confirmation.css";
import FooterComponent from "./Footer";

const Confirmation = () => {
  return (
    <>
      <div className="confirmationimg">
        <div className="confimationheading">Confirmation</div>
        <div className="bookdingdonemsg">Thank You. Your Booking Order Is Confirmed Now.</div>

        <div className="needhelpbox">
          <p className="needhelpboxp">Need Booking Help?</p>
          <p>HotLine: (+91)12345 56789</p>
          <p>Email: Support@YatriWorld.com</p>
          <p>LiveChat: YatriWorld(Skype)</p>
        </div>
      </div>
      <FooterComponent />
    </>
  );
};

export default Confirmation;
