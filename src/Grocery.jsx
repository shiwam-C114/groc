import React, { useState } from "react";
import GroceryInput from "./GroceryInput";
import GroceryList from "./GroceryList";

export default function Grocery() {
  let data = [
    { name: "rice", quantity: "2kg" },
    { name: "wheat", quantity: "1kg" },
    { name: "milk", quantity: "3kg" },
  ];
  const [list, setList] = useState(data);
  return (
    <div>
      <GroceryList list={list} setList={setList} />
      <GroceryInput setList={setList} list={list} />
    </div>
  );
}
