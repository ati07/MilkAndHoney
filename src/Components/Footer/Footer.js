import React from "react";
import ConicalSection from "../ConicalSection/ConicalSection";
import "./Footer.css";
import FacebookIcon from "@material-ui/icons/Facebook";
import InstagramIcon from "@material-ui/icons/Instagram";
import LinkedInIcon from "@material-ui/icons/LinkedIn";
function Footer({clr1}) {
  return (
    <div className="footer">
      <ConicalSection clr={clr1} />
      <div style={{margin:157, color:'#fff'}}>
        <h1>FOLLOW US</h1>
        <div style={{justifyContent:'space-between'}}>
          <FacebookIcon  style={{padding:5}}/>
          <InstagramIcon style={{padding:5}} />
          <LinkedInIcon style={{padding:5}}/>
        </div>
      </div>
      <div style={{backgroundColor:'#093145', width:'100%', color:'#fff'}}>
          <h2>© 2021 ALL RIGHTS RESERVED</h2>
      </div>
    </div>
  );
}

export default Footer;
