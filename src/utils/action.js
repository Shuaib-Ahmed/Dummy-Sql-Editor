import { showNotification } from "./notification";
import mockData from "./mockData";

const tableExist = (existTable, tableName) => {
  if (existTable === null) return -1;
  return existTable.findIndex(({ table_name }) => tableName === table_name);
};

const delteTableValues = (tableName) => {
  let existValues = JSON.parse(localStorage.getItem("values"));

  if (existValues !== null) {
    existValues = existValues.filter(
      ({ table_name }) => table_name !== tableName
    );
  }

  localStorage.setItem("values", JSON.stringify(existValues));
};

const showMockData = (setQueryResult) => {
  let table = {};
  const data = mockData();
  Object.keys(data[0]).forEach((value, index) => {
    table = { ...table, [`column_${index}`]: value };
  });

  setQueryResult({ table, values: data });
};

export const createTable = (queryData) => {
  let existTable = JSON.parse(localStorage.getItem("tables"));

  if (existTable === null) {
    existTable = [];
  } else {
    if (tableExist(existTable, queryData.table_name) > -1) {
      showNotification(
        "Duplicate Table Name",
        "Table name already exist please choose another one",
        "danger"
      );
      return;
    }
  }

  existTable.push(queryData);
  localStorage.setItem("tables", JSON.stringify(existTable));
  showNotification("Table Created", "", "success");
};

export const describleTable = (queryData, setQueryResult) => {
  let existTable = JSON.parse(localStorage.getItem("tables"));

  const index = tableExist(existTable, queryData.table_name);

  if (index === -1) {
    showNotification(
      "Table Name Not Exist",
      "Please enter a valid table name",
      "danger"
    );
    return;
  }

  setQueryResult(existTable[index]);
};

export const dropTable = (queryData) => {
  let existTable = JSON.parse(localStorage.getItem("tables"));

  const index = tableExist(existTable, queryData.table_name);

  if (index === -1) {
    showNotification(
      "Table Name Not Exist",
      "Please enter a valid table name",
      "danger"
    );
    return;
  }

  existTable.splice(index, 1);

  localStorage.setItem("tables", JSON.stringify(existTable));

  delteTableValues(queryData.table_name);

  showNotification("Deleted Table", "", "success");
};

export const inserValues = (queryData) => {
  const existTable = JSON.parse(localStorage.getItem("tables"));

  if (tableExist(existTable, queryData.table_name) === -1) {
    showNotification(
      "Table Name Not Exist",
      "Please enter a valid table name",
      "danger"
    );
    return;
  }

  let existValue = JSON.parse(localStorage.getItem("values"));

  if (existValue === null) {
    existValue = [];
  }

  existValue.push(queryData);
  localStorage.setItem("values", JSON.stringify(existValue));

  showNotification("Value Inserted In Table", "", "success");
};

export const showTableValues = (queryData, setQueryResult) => {
  if (queryData.table_name === "test") {
    showMockData(setQueryResult);
    return;
  }

  let existTable = JSON.parse(localStorage.getItem("tables"));

  const index = tableExist(existTable, queryData.table_name);

  if (index === -1) {
    showNotification(
      "Table Name Not Exist",
      "Please enter a valid table name",
      "danger"
    );
    return;
  }

  let existValues = JSON.parse(localStorage.getItem("values"));

  if (existValues !== null) {
    existValues = existValues.filter(
      ({ table_name }) => table_name === queryData.table_name
    );
  } else {
    existValues = [];
  }

  setQueryResult({ table: existTable[index], values: existValues });
};
