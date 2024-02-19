import { useEffect, useState } from "react";
import Contact from "/src/component/Contact";

import "./App.css";

function App() {
  useEffect(() => {
    fetch("https://randomuser.me/api/?results=50")
      .then((res) => res.json())
      .then((data) => console.log(data.results));
  });

  return (
    <>
      <Contact />
    </>
  );
}

export default App;
