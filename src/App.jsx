import React from "react";
import "./App.scss";
import { Header } from "./components/sematics/Header";
import { Notes } from "./components/notes/Notes";
import { Footer } from "./components/sematics/Footer";

function App() {
  return (
    <>
      <Header />
      <Notes />
      <Footer />
    </>
  );
}

export default App;
