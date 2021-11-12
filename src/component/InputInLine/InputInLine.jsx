import React, { useState } from "react";
import "./input-in-line.css";

const InputInLine = (props) => {
  const { callback, inputText } = props;
  const [toInput, setToInput] = useState(false);

  const handleToInput = () => {
    setToInput(true);
  };

  const handleInputChange = (e) => {
    if (e.target.value && typeof callback === "function") {
      callback(e.target.value);
    }

    setToInput(false);
  };

  const handleInputChangeKeyDown = (e) => {
    if (e.keyCode === 13) {
      if (typeof callback === "function") {
        callback(e.target.value);
      }
      setToInput(false);
    }
  };

  return toInput ? (
    <input
      type="text"
      onBlur={handleInputChange}
      onKeyDown={handleInputChangeKeyDown}
      autoFocus
    />
  ) : (
    <div onClick={handleToInput} className="input-placeholder">
      {inputText}
    </div>
  );
};

export default InputInLine;
