import React, { useState, useContext } from "react";

import { showTableValues } from "../../utils/action";
import { MainContext } from "../../context/MainContextProvider";

const SelectTableValue = () => {
  const [queryData, setQueryData] = useState({});
  const { setQueryResult } = useContext(MainContext);
  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        showTableValues(queryData, setQueryResult);
      }}
    >
      <h3>
        select * from
        <input
          type="text"
          id="table_name"
          className="textInput"
          required
          placeholder="Table Name"
          onChange={(e) => setQueryData({ [e.target.id]: e.target.value })}
        />
      </h3>
      <button type="submit" className="submitButton">
        Show Data
      </button>
    </form>
  );
};

export default SelectTableValue;
