import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Mycomponent from "./components/Mycomponent";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <Mycomponent label="Password" />
      <br />
      <Mycomponent label="รหัส" />
    </>
  );
}

export default App;
