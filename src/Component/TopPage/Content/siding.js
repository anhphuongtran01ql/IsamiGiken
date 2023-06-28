import React from "react";
import siding_bg from "../../../assets/Images/siding/siding_bg.webp";
import "./siding.css";

function Siding() {
  return (
    <>
      <img src={siding_bg} alt="siding" />
      <a href="/">
        「美しさ」と「耐久性」
        <br />
        両方を備えたサイディング
      </a>
    </>
  );
}

export default Siding;
