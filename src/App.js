import React from "react";
import Stories from "./Components/Stories";
import Pagination from "./Components/Pagination";
import Search from "./Components/Search";

const App = () => {
  return (
    <div>
      <h1>Welcome to news Website</h1>
      <Search />
      <Pagination />
      <Stories />
    </div>
  );
};

export default App;
