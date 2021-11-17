import React, { useState } from "react";
import InputInLine from "../InputInLine";
import "./table.css";

const Table = (props) => {
  const [defaultHeading, setDefaultHeading] = useState([
    { id: 32, name: "Entry 1" },
    { id: 47, name: "Entry 2" },
  ]);
  const [dataSource, setDataSource] = useState([
    { id: 31231, "Entry 1": 1, "Entry 2": 3 },
    { id: 3123, "Entry 1": 2, "Entry 2": 4 },
    { id: 3133, "Entry 1": 7, "Entry 2": 2 },
  ]);

  const handleHeader = () => {
    setDefaultHeading((prev) => [
      ...prev,
      { id: prev[prev.length - 1].id + 1, name: "Entry " + (prev.length + 1) },
    ]);
  };

  const handleNewRow = () => {
    setDataSource((prev) => [...prev, { id: prev[prev.length - 1].id + 1 }]);
  };

  const handleNewEntry = (value, rowKey, columnName) => {
    setDataSource((prev) => {
      const newArr = prev.map((element) => {
        const newEl = element;
        if (element.id === rowKey) {
          newEl[columnName] = value;
        }
        return newEl;
      });
      return newArr;
    });
  };

  const handleChangeHeading = (value, columnId) => {
    let prevColumnName = "";
    let newColumnName = value;
    setDefaultHeading((prev) => {
      const newArr = prev.map((element) => {
        const newEl = element;
        if (element.id === columnId) {
          prevColumnName = element.name;
          element.name = newColumnName;
        }
        return newEl;
      });
      return newArr;
    });

    setDataSource((prev) => {
      const newArr = prev.map((element) => {
        const newEl = element;
        const prevName = newEl[prevColumnName];

        newEl[newColumnName] = prevName;
        return newEl;
      });

      return newArr;
    });
    console.log(defaultHeading);
    console.log(dataSource);
  };

  const tableContent = (
    <table>
      <thead>
        <tr>
          {Object.values(defaultHeading).map((column) => (
            <th key={column.id}>
              <InputInLine
                inputText={column.name}
                callback={handleChangeHeading}
                columnId={column.id}
              />
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
            {Object.values(defaultHeading).map((column) => (
              <td key={column.id}>
                <InputInLine
                  inputText={row[column.name]}
                  callback={handleNewEntry}
                  columnName={column.name}
                  rowKey={row["id"]}
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
