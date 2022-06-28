import React, { useContext } from "react";
import styles from "./css/queryContainer.module.css";

import {
  CreateTableQuery,
  DescribeTableQuery,
  DropTableQuery,
  InsertTableValue,
  SelectTableValue,
} from "./QueryContent";

import { MainContext } from "../context/MainContextProvider";
import { BiSearchAlt } from "react-icons/bi";

const QueryContainer = () => {
  const { selectedQuery } = useContext(MainContext);

  if (selectedQuery.trim().length === 0) {
    return (
      <section
        className={styles.mainContainer}
        style={{ alignItems: "center" }}
      >
        <h2 style={{ display: "flex", alignItems: "center" }}>
          Please Select A Query Type <BiSearchAlt />
        </h2>
      </section>
    );
  }

  return (
    <section className={styles.mainContainer}>
      {selectedQuery.trim().toLowerCase() === "create" && <CreateTableQuery />}

      {selectedQuery.trim().toLowerCase() === "describe" && (
        <DescribeTableQuery />
      )}

      {selectedQuery.trim().toLowerCase() === "drop" && <DropTableQuery />}

      {selectedQuery.trim().toLowerCase() === "insert" && <InsertTableValue />}

      {selectedQuery.trim().toLowerCase() === "select" && <SelectTableValue />}
    </section>
  );
};

export default QueryContainer;
