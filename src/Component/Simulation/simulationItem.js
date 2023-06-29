import { Radio } from "antd";
import React from "react";

const SimulationItem = ({ item, onAddChild, style }) => {
  return (
    <div style={{ ...style }}>
      <h2 className="simulation__heading">{item.title}</h2>
      <Radio.Group
        buttonStyle="solid"
        className="simulation__radio_group"
        onChange={(e) => onAddChild(e.target.value)}
      >
        {item.options.map((option, index) => (
          <Radio.Button className="simulation__item" value={option} key={index}>
            {option.value}
          </Radio.Button>
        ))}
      </Radio.Group>
    </div>
  );
};

export default SimulationItem;
