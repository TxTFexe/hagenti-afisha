import "./App.css";
import "./style.css";
import { Header, Sections } from "./Components";
import { useDispatch, useSelector } from "react-redux";
import React from "react";
import { Films, Theatre } from "./Pages";

function App() {
  const section = useSelector((state) => state.sections.name);
  const dispath = useDispatch();

  return (
    <>
      <div className="container">
        <Header />
        <main>
          <Sections />
          <title className="section_title">{section}</title>
          {section == "Кино" ? <Films /> : <Theatre />}
        </main>
      </div>
      <footer>
        <h2></h2>
      </footer>
    </>
  );
}

export default App;
