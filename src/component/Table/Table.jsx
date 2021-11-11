import React, { useState } from "react";
import InputInLine from "../InputInLine";
import "./table.css";

export default function Table(props) {
  const [defaultHeading, setDefaultHeading] = useState(["Entry 1", "Entry 2"]);
  const [dataSource, setDataSource] = useState([
    [1, 2],
    [3, 4],
    [5, 6],
    [7, 8],
    [9, 10],
  ]);

  const handleHeader = () => {
    setDefaultHeading((prev) => [...prev, "Entry " + (prev.length + 1)]);
  };

  const handleNewEntry = () => {
    setDataSource((prev) => [...prev, [1, 2]]);
  };

  const tableContent = (
    <table>
      <tr>
        {defaultHeading.map((column) => (
          <th key={column}>{column}</th>
        ))}
        <button onClick={handleHeader}>+</button>
      </tr>
      {dataSource.map((row) => (
        <tr>
          {defaultHeading.map((list, index) => (
            <td key={index}>{row[index]}</td>
          ))}
        </tr>
      ))}
      <tr>
        <td>
          <InputInLine />
        </td>
      </tr>
    </table>
  );

  return (
    <div>
      {tableContent}
      <button onClick={handleNewEntry}>+</button>
    </div>
  );
}
