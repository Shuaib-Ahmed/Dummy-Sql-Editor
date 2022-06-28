import React, { useState } from "react";

import { createTable } from "../../utils/action";

import { BiMessageAltAdd } from "react-icons/bi";
import { AiFillDelete } from "react-icons/ai";

const CreateTableQuery = () => {
  const [columnNo, setColumnNo] = useState(1);
  const [queryData, setQueryData] = useState({});

  const columnArray = new Array(columnNo).fill(0);

  const changeHandler = (e) => {
    setQueryData((prevState) => {
      return { ...prevState, [e.target.id]: e.target.value };
    });
  };

  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        createTable(queryData);
      }}
    >
      <h3>
        create table
        <input
          type="text"
          placeholder="Table Name"
          className="textInput"
          id="table_name"
          onChange={changeHandler}
          required
        />
        {"("}
      </h3>

      {columnArray.map((item, index) => {
        return (
          <div key={index} style={{ margin: "1rem 2rem" }}>
            <input
              type="text"
              placeholder="Column Name"
              className="textInput"
              id={`column_${index}`}
              onChange={changeHandler}
              required
            />
            {index > 0 && (
              <AiFillDelete
                onClick={() => setColumnNo((prevState) => prevState - 1)}
                style={{ cursor: "pointer" }}
              />
            )}
          </div>
        );
      })}

      <h3
        style={{
          display: "flex",
          alignItems: "center",
          margin: "1rem 2rem",
          cursor: "pointer",
        }}
        onClick={() => setColumnNo((prevState) => prevState + 1)}
      >
        <BiMessageAltAdd /> More Column
      </h3>

      <h3>{");"}</h3>

      <button className="submitButton" type="submit">
        Create New Table
      </button>
    </form>
  );
};

export default CreateTableQuery;
