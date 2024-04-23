import React from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import Header from "./components/Header";
import Form from "./components/Form";

function App() {
  return (
    <div className="outer-container">
      <div className="grid-container">
        <Header />

        <Form />
      </div>
    </div>
  );
}

export default App;
