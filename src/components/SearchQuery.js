import React, { useContext } from "react";
import styles from "./css/searchQuery.module.css";

import { MainContext } from "../context/MainContextProvider";
import Select from "react-select";

const SearchQuery = () => {
  const { setSelectedQuery } = useContext(MainContext);

  const options = [
    { value: "create", label: "Create Table" },
    { value: "describe", label: "Describe Table" },
    { value: "drop", label: "Drop Table" },
    { value: "insert", label: "Insert Value In Table" },
    { value: "select", label: "Select Value From Table" },
  ];

  const style = {
    control: (base) => ({
      ...base,
      border: 0,
      // This line disable the blue border
      boxShadow: "none",
    }),
  };

  return (
    <Select
      options={options}
      className={styles.searchInput}
      placeholder="Please select a query"
      styles={style}
      onChange={(e) => {
        setSelectedQuery(e.value);
      }}
    />
  );
};

export default SearchQuery;
