import React from "react";
import { useGlobalContext } from "./Context";

const Pagination = () => {
  const { getPrevPage, page, nbPages, getNextPage } = useGlobalContext();
  // console.log(nbPages);
  return (
    <>
      <div className="pagination_button">
        <button onClick={() => getPrevPage()}>PREV</button>
        <p>
          {page + 1} of {nbPages}
        </p>
        <button onClick={() => getNextPage()}>NEXT</button>
      </div>
    </>
  );
};

export default Pagination;
