import React from "react";

export default function GroceryList({ list, setList }) {
  return (
    <div>
      <h2>Grocery List</h2>
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>item</th>
          </tr>
        </thead>
        <tbody>
          {list.map((li, i) => (
            <tr key={i}>
              <td>{li.name}</td>
              <td>{li.quantity}</td>
              <td
                onClick={(e) => {
                  setList(
                    list.filter(
                      (ele) =>
                        ele.name != e.target.parentNode.firstChild.innerText
                    )
                  );
                }}
                style={{ cursor: "pointer" }}
              >
                delete
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
