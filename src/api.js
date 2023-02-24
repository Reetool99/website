import React, { useEffect, useState } from "react";

function Api() {
  const [data, setData] = useState([]);
  useEffect(() => {
    fetch("https://petstore.swagger.io/v2/pet/findByStatus?status=available")
      .then((response) => response.json())
      .then((response) => setData(response))
      .catch((error) => error);
  }, []);
  return (
    <div>
      {data.map((data, index) => {
        return <div key={index}>{data.id}</div>;
      })}
    </div>
  );
}

export default Api;
