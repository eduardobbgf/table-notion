import React, { useState } from "react";

export default function InputInLine() {
  const [toInput, setToInput] = useState(false);
  const [inputState, setInputState] = useState(2);

  const handleToInput = () => {
    setToInput(true);
  };

  const handleInputChange = (e) => {
    if (e.target.value) {
      setInputState(e.target.value);
    }
    setToInput(false);
  };

  return toInput ? (
    <input type="text" onBlur={handleInputChange} autoFocus />
  ) : (
    <div onClick={handleToInput}>{inputState}</div>
  );
}
