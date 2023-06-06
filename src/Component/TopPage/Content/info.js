import React from "react";

import info_img1 from "../../../assets/Images/top/info_img1.png";
import info_img2 from "../../../assets/Images/top/info_img2.jpg";
import info_img3 from "../../../assets/Images/top/info_img3.jpg";

function InfoComponent() {
  return (
    <>
      <div
        className="info__group"
        style={{
          display: "flex",
          justifyContent: "space-between",
          height: "30vw",
        }}
      >
        <div
          className="info__group_bg"
          style={{
            backgroundImage: `url(
                ${info_img1}
              )`,
          }}
        ></div>
        <div
          className="info__group_bg"
          style={{
            backgroundImage: `url(
            ${info_img2}
          )`,
          }}
        ></div>
        <div
          className="info__group_bg"
          style={{ backgroundImage: `url(${info_img3})` }}
        ></div>
      </div>
    </>
  );
}

export default InfoComponent;
