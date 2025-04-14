import React, { useState } from 'react'

const Child = ({ todos,setTodos}) => {

    function handleClick(idx){
        let arr = todos.filter((item,index)=>{
          return  item.index !== idx;
        })
        setTodos(arr);
        console.log(todos)
    }
  return (
    <div>
      <h2>Child Component</h2>
      {todos.map((item, idx) => (
        <li key={idx}>{item}<span><button onClick={()=>handleClick(idx)}>Complete</button></span></li>
      ))}
    </div>
  )
}

export default Child
