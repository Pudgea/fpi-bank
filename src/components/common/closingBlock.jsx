import React, { useState } from "react";
import "../../css/cb.css";

const ClosingBlock = ({ question, answer }) => {
  const [isOpened, setIsOpened] = useState(false);
  return (
    <div className={isOpened ? "closingBlock opened" : "closingBlock"}>
      <div className="cb-head" onClick={() => setIsOpened((prev) => !prev)}>
        <h3>{question}</h3>
        <p className="state">{isOpened ? "-" : "+"}</p>
      </div>
      <div className="cd-main">
        <p>{answer}</p>
      </div>
    </div>
  );
};

export default ClosingBlock;
