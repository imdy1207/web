import React, { useState } from "react";
import axios from "axios";

function Users() {
  let [result, setResult] = useState("");

  // 삽입할 데이터 객체를 선언하세요.
  const login = { email: "eve.holt@reqres.in", password: "cityslicka" };
  // axios.post를 호출하고 result에 반환되는 토큰 값을 저장하세요.
  axios
    .post("https://reqres.in/api/login", login)
    .then((response) => setResult(response.data.token));

  return (
    <div>
      <h4>React Axios로 HTTP POST 요청하기</h4>
      <div>Token: {result}</div>
    </div>
  );
}

export default Users;