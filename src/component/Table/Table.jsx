import React, { useContext, useMemo } from "react";
import InputInLine from "../InputInLine";
import TableContext from "../../context/table-context";
import "./table.css";

const Table = (props) => {
  const { defaultHeading, setDefaultHeading, dataSource, setDataSource } =
    useContext(TableContext);

  const tableData = useMemo(() => {
    return [...dataSource];
  }, [dataSource]);

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
        const newEl = { ...element };
        const prevName = newEl[prevColumnName];
        delete newEl[prevColumnName];
        newEl[newColumnName] = prevName;
        return newEl;
      });

      return newArr;
    });
  };

  const tableContent = (
    <table>
      <thead>
        <tr>
          {Object.values(defaultHeading).map((column) => (
            <th key={column.id} className="table-column">
              <InputInLine
                inputText={column.name}
                callback={handleChangeHeading}
                columnId={column.id}
              />
            </th>
          ))}
          <th className="add-column">
            <button onClick={handleHeader}>+</button>
          </th>
        </tr>
      </thead>
      <tbody>
        {tableData.map((row) => (
          <tr key={row["id"]}>
            {Object.values(defaultHeading).map((column) => (
              <td key={column.id} className="table-column">
                <InputInLine
                  inputText={row[column.name]}
                  callback={handleNewEntry}
                  columnName={column.name}
                  rowKey={row["id"]}
                />
              </td>
            ))}
            <td className="add-column" />
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
