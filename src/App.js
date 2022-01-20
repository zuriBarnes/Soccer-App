import "./App.css";
import { useState, useEffect } from "react";
import Ballers from "./components/Ballers";
import Create from "./components/Create";

function App() {
  const msg = "conditional launched";
  let isOn = false;

  //  =============== Ballers FC Player data =================== //
  const [ballers, setBallers] = useState(null);

  useEffect(() => {
    fetch("http://localhost:8000/ballers")
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        setBallers(data);
      });
  }, []);

  return (
    <div className="App">
      {/* <Create /> */}
      <h1 className="app__heading">True Ballers FC</h1>
      {ballers && <Ballers ballers={ballers} />}
      {/* {isOn && <div>{msg}</div>} */}
      {/* <hr /> */}
      <footer>Copyright Barnes 2022</footer>
    </div>
  );
}

export default App;
