import React, { useState, useEffect } from "react";
import axios from "axios";

function Users() {
  let [result, setResult] = useState("");
  
  useEffect(() => {
    axios
      .get("https://reqres.in/api/users/2")
      .then((response) => console.log(JSON.stringify(response.data.data)))
      .then((response) => setResult(response.data.data));
  }, []);
  
  return (
    <div>
      <h4>React Axios로 HTTP GET 요청하기</h4>
      <div>
        Name: {result.first_name + " " + result.last_name} <br />
        Email: {result.email} <br />
      </div>
    </div>
  );
}

export default Users;
