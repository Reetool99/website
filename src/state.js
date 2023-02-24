import React from "react";
import { useState } from "react";

function State() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [data, setData] = useState([]);

  const Submit = () => {
    console.log([...data, { name, email }]);
    setData([...data, { name, email }]);
    setName("");
    setEmail("");
  };
  const RemoveItem = (index) => {
    let arr = data;
    arr.splice(index, 1);
    setData([...arr]);
  };
  return (
    <div>
      <input
        type="text"
        placeholder="name"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <input
        type="text"
        placeholder="email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <button onClick={Submit}>Add</button>
      {/* {data.map((item, index) => {
        return (
          <>
            <div key={index}>
              <h1>
                {item.name} {item.email}
              </h1>
              <button onClick={RemoveItem}>Remove</button>
            </div>
          </>
        );
      })} */}
      {data.map((item, index) => {
        return (
          <div key={index}>
            <h1>{item.name}</h1>
          </div>
        );
      })}
    </div>
  );
}

export default State;
