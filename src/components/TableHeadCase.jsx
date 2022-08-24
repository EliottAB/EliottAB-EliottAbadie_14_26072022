import React, { useState } from 'react'

export function TableHeadCase({name, value, lastSort, sortEmployees}) {

  const [way, setway] = useState("asc")
  
  //change the way to sort the employees
  function handleWay(){
      if (way === "asc") {
          setway("desc")
          return "desc"
      }
      if (way === "desc") {
          setway("asc")
          return "asc"
      }
  }

  return (
    <th>
      <button onClick={lastSort === value ? ()=>{sortEmployees(value, handleWay())} : ()=>{sortEmployees(value, "asc"); setway("asc")}}>
          {name}
          <div className="sortrows">
              <span style={way === "asc" && lastSort === value ? {borderColor: "red"} : {borderColor: "rgb(200, 200, 200)"}}/>
              <span style={way === "desc" && lastSort === value ? {borderColor: "red"} : {borderColor: "rgb(200, 200, 200)"}}/>
          </div>
      </button>
    </th>
  )

}
