import React, { useContext, Fragment, useState, useEffect } from "react";

import { MainContext } from "../../context/MainContextProvider";

const SelectTable = () => {
  const { queryResult } = useContext(MainContext);

  const { table, values } = queryResult;

  const [tableValue, setTableValue] = useState([]);
  const [limit, setLimit] = useState(20);

  useEffect(() => {
    setTableValue(values.slice(0, limit));
  }, [values, limit]);

  if (values.length === 0) {
    return <h3>No Data In Table</h3>;
  }

  return (
    <section style={{ width: "100%" }}>
      <h3 style={{ margin: "1rem 0" }}>
        Table Name : {table.table_name || "test"}
      </h3>

      <h3 style={{ margin: "1rem 0" }}>Total Rows : {values.length}</h3>

      <div style={{ display: "flex", margin: "1rem 0" }}>
        <h3>Limit : </h3>
        <input
          type="number"
          placeholder="Enter limit"
          defaultValue={limit}
          style={{ font: "1.5rem", padding: "0.5rem", marginLeft: "0.5rem" }}
          onChange={(e) => setLimit(e.target.value)}
          min={1}
        />
      </div>

      <table>
        <thead>
          <tr>
            {Object.values(table).map((value, index) =>
              index === 0 ? (
                <Fragment key={String(Math.random())} />
              ) : (
                <th key={String(Math.random())}>{value}</th>
              )
            )}
          </tr>
        </thead>
        <tbody>
          {tableValue.map((tableValues) => {
            return (
              <tr key={String(Math.random())}>
                {Object.values(tableValues).map((value, index) =>
                  index === 0 ? (
                    <Fragment key={String(Math.random())} />
                  ) : (
                    <td key={String(Math.random())}>{value}</td>
                  )
                )}
              </tr>
            );
          })}
        </tbody>
      </table>
    </section>
  );
};

export default SelectTable;
