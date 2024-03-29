import React from "react";
import Stories from "./Components/Stories";
import Pagination from "./Components/Pagination";
import Search from "./Components/Search";
import "./App.css";

const App = () => {
  return (
    <div>
      <Search />
      <Pagination />
      <Stories />
    </div>
  );
};

export default App;
