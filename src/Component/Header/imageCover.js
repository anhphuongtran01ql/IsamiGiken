import React from "react";
import "./imageCover.css";

function ImageCover(props) {
  const item = props.infoHeader;

  return (
    <div key={item.id} className="img-cover__container">
      <img className="img-cover__image" src={item.image} alt={item.title} />
      <div className="img-cover__text_group">
        <h1 className="img-cover__heading">
          {item.title}
          <span className="img-cover__text">- {item.subTitle}</span>
        </h1>
      </div>
    </div>
  );
}

export default ImageCover;
