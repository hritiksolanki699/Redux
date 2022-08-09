import Leftbar from "./components/leftbar/Leftbar";
import Navbar from "./components/navbar/Navbar";
import Rightbar from "./components/rightbar/Rightbar";
import Update from "./components/update/Update";
import "./app.css";
import { useState } from "react";

const App = () => {
  const [name, setName] = useState("Hritik")

  return (
    <div>
      <Navbar name={name}/>
      <div className="container">
        <Leftbar />
        <Update />
        <Rightbar />
      </div>
    </div>
  );
};

export default App;
