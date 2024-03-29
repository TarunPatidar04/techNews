import React from "react";
import { useGlobalContext } from "./Context";
const Search = () => {
  const { query, searchPost } = useGlobalContext();
  return (
    <>
      <div>
        <h1>Tech News</h1>
        <form onSubmit={(e)=>e.preventDefault()}>
          <div className="form">
            <input
              type="text"
              name=""
              id=""
              placeholder="Search here"
              value={query}
              onChange={(e) => {
                searchPost(e.target.value);
              }}
            />
          </div>
        </form>
      </div>
    </>
  );
};

export default Search;
