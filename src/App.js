import React, { useState } from "react";
import "./App.css";
import KanbanBoard from "./components/Board";
import Header from "./components/Header";

function App() {
  const [isDisplayOpen, setIsDisplayOpen] = useState(false);

  return (
    <div className="App">
      <Header isOpen={isDisplayOpen} setIsOpen={setIsDisplayOpen} />
      <main className="app-main">
        <KanbanBoard isDisplayOpen={isDisplayOpen} />
      </main>
    </div>
  );
}

export default App;