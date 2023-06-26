import { Radio } from "antd";
import React, { useState } from "react";
import "./simulationItem.css";

function SimulationItem({ item }) {
  return (
    <>
      <h2 className="simulation__heading">{item.title}</h2>
      <Radio.Group
        buttonStyle="solid"
        className="simulation__radio_group"
        // onChange={handleSelect}
        // value={selectedValue}
      >
        <Radio.Button className="simulation__item" value="a">
          {item.option1}
        </Radio.Button>
        <Radio.Button className="simulation__item" value="b">
          {item.option2}
        </Radio.Button>
        <Radio.Button className="simulation__item" value="c">
          {item.option3}
        </Radio.Button>
      </Radio.Group>
    </>
  );
}

export default SimulationItem;
