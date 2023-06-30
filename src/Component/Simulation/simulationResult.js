import React, { useRef, useState } from "react";
import "./simulationResult.css";

function SimulationResult() {
  const [resultUI, setResultUI] = useState(false);
  const UIRef = useRef(null);

  const handleClick = () => {
    setResultUI(true);

    setTimeout(() => {
      const element = UIRef.current;
      const y = element.getBoundingClientRect().top + window.pageYOffset - 70;
      element.scrollIntoView({
        behavior: "smooth",
        block: "start",
        inline: "nearest",
      });
      window.scrollTo({ top: y, behavior: "smooth" });
    }, 500);
  };

  return (
    <section className="simulation__result container">
      <button className="button__submit" onClick={handleClick}>
        シミュレーション結果を見る
      </button>
      {resultUI && (
        <>
          <div className="card__result" ref={UIRef}>
            <h3>お見積工事価格</h3>
            <p>
              税込<span>RESULT</span>円
            </p>
            <a href="/contact-us">さらに詳しい見積はこちら</a>
          </div>
          <a className="turn__back" href="/simulation">
            もう一度シミュレーションを行う
          </a>
        </>
      )}
    </section>
  );
}

export default SimulationResult;
