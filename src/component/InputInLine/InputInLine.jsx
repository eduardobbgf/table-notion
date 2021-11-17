import React, { useState } from "react";
import "./input-in-line.css";

const InputInLine = (props) => {
  const { callback, inputText, rowKey, columnName, columnId } = props;
  const [toInput, setToInput] = useState(false);

  const handleToInput = () => {
    setToInput(true);
  };

  const handleInputChange = (e) => {
    if (e.target.value && typeof callback === "function") {
      if (rowKey) {
        callback(e.target.value, rowKey, columnName);
      } else {
        callback(e.target.value, columnId);
      }
    }

    setToInput(false);
  };

  const handleInputChangeKeyDown = (e) => {
    if (e.keyCode === 13) {
      if (typeof callback === "function") {
        if (rowKey) {
          callback(e.target.value, rowKey, columnName);
        } else {
          callback(e.target.value, columnId);
        }
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
