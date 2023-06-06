import React from "react";
import "./info.css";

import info_img1 from "../../../assets/Images/top/info_img1.png";
import info_img2 from "../../../assets/Images/top/info_img2.jpg";
import info_img3 from "../../../assets/Images/top/info_img3.jpg";

const items = [
  {
    id: 1,
    image: info_img1,
    title: "Company",
    text: "会社概要",
  },
  {
    id: 2,
    image: info_img2,
    title: "Staff",
    text: "スタッフ紹介",
  },
  {
    id: 3,
    image: info_img3,
    title: "Recruit",
    text: "採用情報",
  },
];

function InfoComponent() {
  return (
    <>
      <div className="info__group">
        {items &&
          items.map((item) => (
            <div
              key={item.id}
              className="info__group_bg"
              style={{
                backgroundImage: `url(
            ${item.image}
          )`,
              }}
            >
              <div className="info__text_overlay">
                <h3 className="info__text">
                  {item.title}
                  <span className="info__text_small">{item.text}</span>
                </h3>
              </div>
            </div>
          ))}
      </div>
    </>
  );
}

export default InfoComponent;
