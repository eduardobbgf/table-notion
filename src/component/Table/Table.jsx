import React, { useState } from "react";
import InputInLine from "../InputInLine";
import "./table.css";

const Table = (props) => {
  const [defaultHeading, setDefaultHeading] = useState(["Entry 1", "Entry 2"]);
  const [dataSource, setDataSource] = useState([
    { id: 31231, "Entry 1": 1, "Entry 2": 3 },
    { id: 3123, "Entry 1": 2, "Entry 2": 4 },
    { id: 3133, "Entry 1": 7, "Entry 2": 2 },
  ]);
  console.log(Object.keys(dataSource));

  const handleHeader = () => {
    setDefaultHeading((prev) => [...prev, "Entry " + (prev.length + 1)]);
  };

  const handleNewRow = () => {
    setDataSource((prev) => [...prev, {}]);
  };

  const handleNewColumn = () => {};

  const handleNewEntry = (args) => {
    console.log(args);
  };

  const tableContent = (
    <table>
      <thead>
        <tr>
          {defaultHeading.map((column) => (
            <th key={column}>
              <InputInLine inputText={column} />
            </th>
          ))}
          <th>
            <button onClick={handleHeader}>+</button>
          </th>
        </tr>
      </thead>
      <tbody>
        {dataSource.map((row) => (
          <tr key={row["id"]}>
            {defaultHeading.map((column, rowIndex) => (
              <td key={column}>
                <InputInLine
                  inputText={row[column]}
                  callback={handleNewEntry}
                />
              </td>
            ))}
          </tr>
        ))}
      </tbody>
    </table>
  );

  return (
    <div>
      {tableContent}
      <button onClick={handleNewRow}>+</button>
    </div>
  );
};

export default Table;
