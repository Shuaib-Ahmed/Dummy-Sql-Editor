import React, { useState } from "react";

import { dropTable } from "../../utils/action";

const DropTableQuery = () => {
  const [queryData, setQueryData] = useState({});
  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        dropTable(queryData);
      }}
    >
      <h3>
        drop table
        <input
          type="text"
          id="table_name"
          placeholder="Table Name"
          className="textInput"
          onChange={(e) => setQueryData({ [e.target.id]: e.target.value })}
          required
        />
        ;
      </h3>

      <button type="submit" className="submitButton">
        Drop Table
      </button>
    </form>
  );
};

export default DropTableQuery;
