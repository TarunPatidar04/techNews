//context creation
//provider
//consumer lengthy remove
//useContext hook

import React, { useContext, useEffect, useReducer } from "react";
import reducer from "./reducer";
let API = "https://hn.algolia.com/api/v1/search?";

const initialState = {
  isLoading: true,
  query: "",
  nbpages: 0,
  page: 0,
  hits: [],
};

//1 context creation✅
const AppContext = React.createContext();

//2  create a provider function ✅
const AppProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  const fetchApiData = async (url) => {
    dispatch({ type: "SET_LOADING" });
    try {
      const res = await fetch(url);
      const data = await res.json();
      console.log(data.hits);
      console.log(data.nbPages);
      dispatch({
        type: "GET_STORIES",
        payload: {
          hits: data.hits,
          nbPages: data.nbPages,
        },
      });
      //  isLoading = false;
    } catch (error) {
      console.log(error);
    }
  };

  //Remove the post
  const removePost = (post_ID) => {
    dispatch({ type: "REMOVE_POST", payload: post_ID });
  };

  //to call the api function is search
  const searchPost = (searchQuery) => {
    dispatch({ type: "SEARCH_QUERY", payload: searchQuery });
  };

  // Pagination button
  const getPrevPage = () => {
    dispatch({ type: "PREV_PAGE" });
  };
  const getNextPage = () => {
    dispatch({ type: "NEXT_PAGE" });
  };
  useEffect(() => {
    fetchApiData(`${API}query=${state.query}&page=${state.page}`);
  }, [state.query,state.page]);
  return (
    <AppContext.Provider
      value={{ ...state, removePost, searchPost, getPrevPage, getNextPage }}
    >
      {children}
    </AppContext.Provider>
  );
};

//customm hook
const useGlobalContext = () => {
  return useContext(AppContext);
};

export { AppContext, AppProvider, useGlobalContext };
//3 consumer lengthy remove ❌ replace to useContext hook ✅
//3 useContext hook
