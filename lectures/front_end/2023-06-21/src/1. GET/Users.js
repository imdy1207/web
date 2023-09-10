import React, { useState, useEffect } from "react";
import axios from "axios";

function Users() {
  let [result, setResult] = useState("");
  // useEffect를 사용하지 않고 아래를 출력해보세요.
  // console.log(result);

  // axios.get을 호출하고 result에 반환되는 데이터를 저장하세요.
  useEffect(() => {
    axios
      .get("https://reqres.in/api/users/2")
      .then((response) => setResult(response.data.data));
  }, []);
  return (
    <div>
      <h4>React Axios로 HTTP GET 요청하기</h4>
      <div>
        {/* result를 이용해 출력 결과와 동일하게 출력하세요. */}
        Name: {result.first_name + " " + result.last_name} <br />
        Email: {result.email} <br />
      </div>
    </div>
  );
}

export default Users;