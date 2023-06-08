import "./imageRevonation.css";

function ImageRenovation(props) {
  const item = props.renovations;
  return (
    <div className="img-renovation__container" key={item.id}>
      <img
        className="img-renovation__image"
        src={item.src}
        alt={`Slide ${item.id}`}
      />
      <div className="img-renovation__text-group">
        <div className="img-renovation__heading-wrapper">
          {item.label.map((itemLabel, index) => (
            <h2 key={index} className="img-renovation__heading">
              {itemLabel}
            </h2>
          ))}
        </div>
        <div className="img-renovation__text-wrapper">
          {item.describe.map((itemDescribe, index) => (
            <p key={index} className="img-renovation__text">
              {itemDescribe}
            </p>
          ))}
        </div>
      </div>
    </div>
  );
}

export default ImageRenovation;
