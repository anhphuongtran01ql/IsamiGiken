import React, { useRef, useState } from "react";
import "./simulationItem.css";
import SimulationItem from "./simulationItem";
import SimulationResult from "./simulationResult";

function SimulationList({ item }) {
  const [listQuestion, setListQuestion] = useState([]);

  const ref = useRef(null);

  const onAddChild = (child) => {
    let filterNewQuestion = [];
    filterNewQuestion = listQuestion.filter(
      (item) =>
        item.question !== child.question && item.question <= child.question
    );
    setListQuestion([...filterNewQuestion, child]);

    // setTimeout(() => {
    //   const currentIndex = listQuestion.indexOf(child);
    //   if (currentIndex >= 0 && currentIndex < listQuestion.length - 1) {
    //     const nextQuestion = listQuestion[currentIndex + 1];
    //     const nextQuestionRef = nextQuestion.ref;

    //     if (nextQuestionRef && nextQuestionRef.current) {
    //       nextQuestionRef.current.scrollIntoView({ behavior: "smooth" });
    //     }
    //   }
    // }, 500);
  };

  return (
    <>
      <SimulationItem onAddChild={onAddChild} item={item} />
      {listQuestion.map((question, index) => {
        if (question.options.length <= 0) {
          return <SimulationResult />;
        }
        return (
          <SimulationItem key={index} onAddChild={onAddChild} item={question} />
        );
      })}
    </>
  );
}

export default SimulationList;
