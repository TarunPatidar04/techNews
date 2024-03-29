const reducer = (state, action) => {
  // if (action.type="GET_STORIES") { }
  // console.log(state);

  switch (action.type) {
    case "SET_LOADING":
      return {
        ...state,
        isLoading: true,
      };

    case "GET_STORIES":
      return {
        ...state,
        isLoading: false,
        hits: action.payload.hits,
        // nbpages: action.payload.nbPages,
      };

    case "REMOVE_POST":
      return {
        ...state,
        hits: state.hits.filter(
          (curElem) => curElem.objectID !== action.payload
        ),
      };
    case "SEARCH_QUERY":
      return {
        ...state,
        query: action.payload,
      };
    default:
      break;
  }
  return state;
};

export default reducer;
