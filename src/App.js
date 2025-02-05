import React from "react";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import "bootswatch/dist/slate/bootstrap.min.css";
import Header from "./components/Header";
import WordleMainComponent from "./components/WordleMainComponent";

function App() {
  return (
    <div>
      <Header />
      <br />
      <div className="container">
        <WordleMainComponent />
      </div>
    </div>
  );
}

export default App;
