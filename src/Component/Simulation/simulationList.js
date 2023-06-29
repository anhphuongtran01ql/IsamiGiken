import { Button } from "antd";
import React, { useState } from "react";
import "./simulationItem.css";
import SimulationItem from "./simulationItem";

function SimulationList({ item }) {
  const [listQuestion, setListQuestion] = useState([]);

  const onAddChild = (child) => {
    let filterNewQuestion = [];
    filterNewQuestion = listQuestion.filter(
      (item) =>
        item.question !== child.question && item.question <= child.question
    );
    setListQuestion([...filterNewQuestion, child]);
  };

  return (
    <>
      <SimulationItem onAddChild={onAddChild} item={item} />
      {listQuestion.map((question, index) => {
        if (question.options.length <= 0) {
          return (
            <div>
              <Button
                className="button__submit"
                onClick={() => console.log("onclick")}
                type="primary"
                htmlType="submit"
              >
                Submit
              </Button>
            </div>
          );
        }
        return (
          <SimulationItem key={index} onAddChild={onAddChild} item={question} />
        );
      })}
    </>
  );
}

export default SimulationList;
