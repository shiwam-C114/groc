import React, { useState } from "react";

export default function GroceryInput({ setList, list }) {
  const [item, setItem] = useState("");
  const [qnt, setQnt] = useState(0);
  return (
    <div>
      <input
        type="text"
        placeholder="Input new item to the grocery list"
        size={29}
        name="newItem"
        onChange={(e) => {
          e.preventDefault();
          setItem(e.target.value);
        }}
      />
      <input
        type="number"
        placeholder="Input quatitiy"
        onChange={(e) => {
          e.preventDefault();
          setQnt(e.target.value);
        }}
      />
      <button
        type="submit"
        onClick={() => {
          let obj = { name: item, quantity: qnt + "kg" };
          console.log(obj, ...list);
          setList([...list, obj]);
        }}
        name=""
        id=""
      >
        Add
      </button>
    </div>
  );
}
