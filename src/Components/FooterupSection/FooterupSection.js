import React from "react";
import ConicalSectionabove from "../ConicalSectionabove/ConicalSectionabove";
// import ConicalSectionbelow from "../ConicalSectionbelow/ConicalSectionbelow";
import PhonelinkRingIcon from "@material-ui/icons/PhonelinkRing";
import CreateIcon from "@material-ui/icons/Create";
import PersonPinCircleIcon from "@material-ui/icons/PersonPinCircle";
import "./FooterupSection.css";

function FooterupSection() {
  return (
    <div className="footerup_section">
      <ConicalSectionabove />
      <div style={{ backgroundColor: "#fff", width: 1, marginTop: 70 }}>
        <img src="/img/Navy-Dashed-e1593621199628.png" />
      </div>
      <div className="container">
        <div className="container_item">
          <PhonelinkRingIcon
            style={{
              fontSize: "5em",
              border: "1px solid black",
              padding: 60,
              borderRadius: 100,
              backgroundColor: "#fff",
            }}
          />
          <h2>Call Us</h2>

          <p>(361) 249-2608</p>
        </div>
        <div className="container_item">
          <CreateIcon
            style={{
              fontSize: "5em",
              border: "1px solid black",
              padding: 60,
              borderRadius: 100,
              backgroundColor: "#fff",
            }}
          />
          <h2> Write Us</h2>
          <p>julia@milkandhoneydigital.com</p>
        </div>
        <div className="container_item">
          <PersonPinCircleIcon
            style={{
              fontSize: "5em",
              border: "1px solid black",
              padding: 60,
              borderRadius: 100,
              backgroundColor: "#fff",
            }}
          />
          <h2>Visit Us</h2>
          <p>Houston, TX & Corpus Christi, TX</p>
        </div>
      </div>
      <div style={{ backgroundColor: "#fff", width: 1, marginTop: 50 }}>
        <img src="/img/Navy-Dashed-e1593621199628.png" />
      </div>
      {/* <ConicalSectionbelow /> */}
    </div>
  );
}

export default FooterupSection;
