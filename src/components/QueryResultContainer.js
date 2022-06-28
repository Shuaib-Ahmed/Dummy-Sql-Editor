import React, { useContext } from "react";

import { MainContext } from "../context/MainContextProvider";
import DescribeTable from "./QueryResults/DescribeTable";
import SelectTable from "./QueryResults/SelectTable";

const QueryResultContainer = () => {
  const { queryResult, selectedQuery } = useContext(MainContext);

  if (queryResult.length === 0) {
    return (
      <section>
        <h2>Query Result</h2>
      </section>
    );
  }

  if (selectedQuery === "describe" && queryResult.length !== 0) {
    return <DescribeTable />;
  }

  if (selectedQuery === "select" && queryResult.length !== 0) {
    return <SelectTable />;
  }

  return <div>QueryResultContainer</div>;
};

export default QueryResultContainer;
