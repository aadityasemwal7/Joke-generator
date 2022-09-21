import { useEffect, useState } from "react";
import "./App.css";
import axios from "axios";

function App() {
  const [data, setData] = useState("");

  useEffect(() => {
    axios
      .get("https://v2.jokeapi.dev/joke/Programming,Miscellaneous,Dark,Spooky?type=single")
      .then((res) => {
        setData(res.data["joke"])
      });
  }, []);
  return (
  <div className="App">
    <h1>Joke Generator</h1>
    <h3>{data}</h3>
    <footer>Copyright © Aaditya Semwal</footer>
  </div>
  );
}

export default App;
