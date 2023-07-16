import React from "react";
import '../../../src/index.css'


const GotIt: React.FC<any> = (props) => {
  const options = [
    {
      name: "Got It!",
      handler: props.actionProvider.handleGotIt,
      id: 1,
    },
  ];
  return (
    <div className="options-container">
      {options.map((option) => {
        return (
          <button
            key={option.id}
            className="option-button"
            onClick={option.handler}
          >
            {option.name}
          </button>
        );
      })}
    </div>
  );
};

export default GotIt;
