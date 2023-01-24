import React, { useState, useEffect } from "react";
import "./App.css";

function App() {
  const [counter, setCounter] = useState(1);

  useEffect(() => {
    document.title = `Count (${counter})`;
  }, [counter]);

  return (
    <div>
      <button onClick={() => setCounter(counter + 1)}>Count ({counter})</button>
    </div>
  );
}

export default App;
