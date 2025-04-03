import React, { useState } from 'react'

const Child = ({ todos,setTodos}) => {

  return (
    <div>
      <h2>Child Component</h2>
      {todos.map((item, idx) => (
        <li key={idx}>{item}<span><button onClick={(e) => { e.target.remove() }}>Complete</button></span></li>
      ))}
    </div>
  )
}

export default Child
