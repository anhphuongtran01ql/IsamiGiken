import React from "react";
import "./imageComponent.css";

function ImageComponent(props) {
  const item = props.items;
  return (
    <>
      {item.src && item.title && item.label && (
        <div className="img-component__container" key={item.id}>
          <img
            className="img-component__image"
            src={item.src}
            alt={`Slide ${item.id}`}
          />
          <div className="img-component__icon-group">
            <img
              className="img-component__icon"
              src={item.label}
              alt={`Slide ${item.id}`}
            />
            <h2 className="img-component__heading">{item.title}</h2>
          </div>
        </div>
      )}
    </>
  );
}

export default ImageComponent;
