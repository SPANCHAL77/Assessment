import React from 'react'
import {Link} from "react-router-dom"

const NotFound = () => {
  return (
    <div>
      <h1 style={{color:"red"}}>sorry</h1>
      <p style={{color:"red"}}>entered user not found..!</p>
      <Link  style={{color:"blue" , fontSize:"30px" ,fontWeight:"bold"}} to="/">Back to home..!</Link>
    </div>
  )
}

export default NotFound
