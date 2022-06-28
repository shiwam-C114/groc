import React, { useState } from "react";
import { useEffect } from "react";
import GroceryInput from "./GroceryInput";
import GroceryList from "./GroceryList";

export default function Grocery() {

  const [list, setList] = useState([]);

  useEffect(() => {
  fetch("http://localhost:5050/data").then(res=>res.json()).then(data=>setList(data))
   
  }, [])
  
  return (
    <div>
      <GroceryList list={list} setList={setList} />
      <GroceryInput setList={setList} list={list} />
    </div>
  );
}
