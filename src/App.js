import "./App.css";

import {
  SearchQuery,
  QueryContainer,
  QueryResultContainer,
} from "./components";

function App() {
  return (
    <section className="mainContainer">
      {/* Left Part */}
      <section className="leftContentContainer">
        <SearchQuery />
        <QueryContainer />
      </section>

      {/* Right Part */}
      <section className="rightContentContainer">
        <QueryResultContainer />
      </section>
    </section>
  );
}

export default App;
