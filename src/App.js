import React, { useState, useCallback } from "react";
import "./styles.css";
import GetPrime from "./Components/GetPrime";

export default function App() {
  const [prime, setPrime] = useState(1);
  const [prime2, setPrime2] = useState(1);

  const addBoth = () => {
    setPrime((prev) => prev + 15);
    setPrime2((prev) => prev + 15);
  };

  const next1 = () => setPrime((prev) => prev + 1);
  const next2 = () => setPrime2((prev) => prev + 1);
  // const next1 = useCallback(() => setPrime((prev) => prev + 1), []);
  // const next2 = useCallback(() => setPrime2((prev) => prev + 1), []);

  return (
    <div className="App">
      <div>
        <button onClick={addBoth}>ADD BOTH BY 15 </button>
      </div>
      <GetPrime label="first" number={prime} next={next1} />
      <GetPrime label="second" number={prime2} next={next2} />
    </div>
  );
}
// React.memo
// prevProps: { label: "first", value: 1, next:fn }
// nextProps: { label: "first", value: 1, next:fn }
//
