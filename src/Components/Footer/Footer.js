import React from "react";
import ConicalSection from "../ConicalSection/ConicalSection";
import "./Footer.css";
import FacebookIcon from "@material-ui/icons/Facebook";
import InstagramIcon from "@material-ui/icons/Instagram";
import LinkedInIcon from "@material-ui/icons/LinkedIn";
function Footer() {
  return (
    <div className="footer">
      <ConicalSection clr={"#f4f4f5"} />
      <div style={{margin:157}}>
        <h1>FOLLOW US</h1>
        <div>
          <FacebookIcon />
          <InstagramIcon />
          <LinkedInIcon />
        </div>
      </div>
      <div style={{backgroundColor:'#093145', width:'100%'}}>
          <h2>© 2021 ALL RIGHTS RESERVED</h2>
      </div>
    </div>
  );
}

export default Footer;
