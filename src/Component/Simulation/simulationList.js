import React, { useRef, useState } from "react";
import "./simulationItem.css";
import SimulationItem from "./simulationItem";
import SimulationResult from "./simulationResult";

function SimulationList({ item }) {
  const [listQuestion, setListQuestion] = useState([]);

  const listRef = useRef(null);

  const onAddChild = (child) => {
    let filterNewQuestion = [];
    filterNewQuestion = listQuestion.filter(
      (item) =>
        item.question !== child.question && item.question <= child.question
    );
    setListQuestion([...filterNewQuestion, child]);
    // 👇 Scroll to the last element in the list
    setTimeout(() => {
      listRef.current?.lastElementChild?.scrollIntoView({ behavior: "smooth" });
    }, 500);
  };

  return (
    <>
      <SimulationItem onAddChild={onAddChild} item={item} />
      <div ref={listRef} className="simulation__item_wrapper">
        {listQuestion.map((question, index) => {
          if (question.options.length <= 0) {
            return <SimulationResult />;
          }
          return (
            <SimulationItem
              key={index}
              onAddChild={onAddChild}
              item={question}
            />
          );
        })}
      </div>
      {/* <div ref={ref}>EEEEE</div> */}
    </>
  );
}

export default SimulationList;
