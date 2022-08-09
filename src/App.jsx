import React, { useState } from "react";
import "./App.css";
import Footer from "./Footer";
import Mobileform from "./Mobileform";

function App() {
  const [number, setNumber] = useState(null);

  return (
    <div>
      <Mobileform></Mobileform>
      <Footer></Footer>
    </div>
  );
}

export default App;
