import React, { useState } from "react";
import "./App.css";
import Footer from "./Footer";
import Header from "./Header";
import Mobileform from "./Mobileform";

function App() {
  const [number, setNumber] = useState(null);

  return (
    <div>
      <Header></Header>
      <Mobileform></Mobileform>
      <Footer></Footer>
    </div>
  );
}

export default App;
