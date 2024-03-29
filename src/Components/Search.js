import React from 'react'
import { useGlobalContext } from "./Context";


const Search = () => {
  const data=useGlobalContext()
  return (
    <div>
      <h5>Search : :{data}</h5>
    </div>
  )
}

export default Search

