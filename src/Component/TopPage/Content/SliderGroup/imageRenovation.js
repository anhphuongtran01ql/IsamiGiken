import "./imageRevonation.css";

function ImageRenovation(props) {
  const item = props.renovations;
  return (
    <>
      <img
        className="renovation__slider"
        src={item.src}
        alt={`Slide ${item.id}`}
      />
      <div className="renovation-slider__text">
        <div className="wrapper">
          {item.label.map((itemLabel, index) => (
            <h3 key={index}>{itemLabel}</h3>
          ))}
        </div>
        <div className="wrapper">
          {item.describe.map((itemDescribe, index) => (
            <p key={index}>{itemDescribe}</p>
          ))}
        </div>
      </div>
    </>
  );
}

export default ImageRenovation;
