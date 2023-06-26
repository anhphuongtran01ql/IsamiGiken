import React from "react";
import "./imageCover.css";

function ImageCover(props) {
  const item = props.infoHeader;

  return (
    <section key={item.id} className="img-cover__container">
      <img className="img-cover__image" src={item.image} alt={item.title} />
      <div className="content__wrapper">
        <h1 className="img-cover__heading">
          {item.title}
          <strong>{item.subTitle}</strong>
        </h1>
      </div>
    </section>
  );
}

export default ImageCover;
