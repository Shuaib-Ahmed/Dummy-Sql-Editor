import React, { useContext } from "react";

import { MainContext } from "../../context/MainContextProvider";

const DescribeTable = () => {
  const { queryResult } = useContext(MainContext);

  return (
    <div>
      {Object.values(queryResult).map((value, index) => (
        <h3 key={index}>{`${Object.keys(queryResult)[index]} : ${value}`}</h3>
      ))}
    </div>
  );
};

export default DescribeTable;
