import React from "react";

const TableContext = React.createContext({
  dataSource: null,
  defaultHeading: null,
  setDataSource: () => {},
  setDefaultHeading: () => {},
});

export default TableContext;
