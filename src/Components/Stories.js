import React from 'react'
import { useGlobalContext } from "./Context";


const Stories = () => {
  const data=useGlobalContext()
  return (
    <div>
      <h5>Strores : :{data}</h5>
    </div>
  )
}

export default Stories
