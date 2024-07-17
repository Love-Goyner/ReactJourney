import { useState } from "react";
import "./App.css";
import Card from "./component/Card";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <Card userName="Love-Goyner" btnText="View Resume"/>
      <Card userName="Kush-Goyner" btnText="View Profile"/>
    </>
  );
}

export default App;
