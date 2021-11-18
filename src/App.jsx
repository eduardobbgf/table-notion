import "./App.css";
import React, { Fragment, useState } from "react";
import Table from "./component/Table";
import TableContext from "./context/table-context";

function App() {
  const [dataSource, setDataSource] = useState([
    { id: 31231, "Entry 1": 1, "Entry 2": 3 },
    { id: 3123, "Entry 1": 2, "Entry 2": 4 },
    { id: 3133, "Entry 1": 7, "Entry 2": 2 },
  ]);
  const [defaultHeading, setDefaultHeading] = useState([
    { id: 32, name: "Entry 1" },
    { id: 47, name: "Entry 2" },
  ]);
  const value = {
    dataSource: dataSource,
    defaultHeading: defaultHeading,
    setDataSource: setDataSource,
    setDefaultHeading: setDefaultHeading,
  };
  return (
    <TableContext.Provider value={value}>
      <TableContext.Consumer>
        {(context) => (
          <Fragment>
            <Table {...context} />
          </Fragment>
        )}
      </TableContext.Consumer>
    </TableContext.Provider>
  );
}

export default App;
