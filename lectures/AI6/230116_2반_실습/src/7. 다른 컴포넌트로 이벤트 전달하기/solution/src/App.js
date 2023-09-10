import React, { useState } from 'react';
import MyForm from "./components/MyForm.js";

function App() {
    const [ username, setUsername ] = useState("");



    return (
        <div className="App">
            <h1>{username}님 환영합니다.</h1>
            <MyForm onChange={(e) => (setUsername(e.target.value))}></MyForm>
        </div>
    );
}

export default App;
