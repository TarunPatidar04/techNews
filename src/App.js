import React from "react";
import Stories from "./Components/Stories";
import Pagination from "./Components/Pagination";
import Search from "./Components/Search";
import { useGlobalContext } from "./Components/Context";

const App = () => {
  const data = useGlobalContext();
  return (
    <div>
      <h3>Welcome to news Website : {data}</h3>
      <Search />
      <Pagination />
      <Stories />
    </div>
  );
};

export default App;
