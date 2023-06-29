import React from "react";
import "./info.css";

import info_img1 from "../../../assets/Images/top/info_img1.png";
import info_img2 from "../../../assets/Images/top/info_img2.jpg";
import info_img3 from "../../../assets/Images/top/info_img3.jpg";

const items = [
  {
    id: 1,
    image: info_img1,
    path: "/about",
    title: "Company",
    text: "会社概要",
  },
  {
    id: 2,
    image: info_img2,
    path: "/about",
    title: "Staff",
    text: "スタッフ紹介",
  },
  {
    id: 3,
    image: info_img3,
    path: "/recruit",
    title: "Recruit",
    text: "採用情報",
  },
];

function InfoComponent() {
  return (
    <>
      {items.map((item) => (
        <a href={item.path} key={item.id}>
          <img src={item.image} alt={item.text} />
          <div className="text">
            <h3>
              {item.title}
              <strong>{item.text}</strong>
            </h3>
          </div>
        </a>
      ))}
    </>
  );
}

export default InfoComponent;
