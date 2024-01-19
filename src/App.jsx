import React from "react";
import "./App.css";
import Footer from "./Footer";
import Header from "./Header";
import Mobileform from "./Mobileform";

function App() {
    return (
        <div id="background">
        <div className="app">
            <Header />
            <Mobileform />
            <Footer />
            </div>
        </div>
    );
}

export default App;
