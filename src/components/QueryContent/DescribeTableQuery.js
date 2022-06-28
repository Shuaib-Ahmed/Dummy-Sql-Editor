import React, { useState, useContext } from "react";

import { describleTable } from "../../utils/action";
import { MainContext } from "../../context/MainContextProvider";

const DescribeTableQuery = () => {
  const { setQueryResult } = useContext(MainContext);
  const [queryData, setQueryData] = useState({});
  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        describleTable(queryData, setQueryResult);
      }}
    >
      <h3>
        desc
        <input
          type="text"
          className="textInput"
          placeholder="Table Name"
          id="table_name"
          onChange={(e) => setQueryData({ [e.target.id]: e.target.value })}
          required
        />
        ;
      </h3>
      <button type="submit" className="submitButton">
        Describe Table
      </button>
    </form>
  );
};

export default DescribeTableQuery;
