import "./styles.css";
import { useState } from "react";

export default function App() {
  const [count, setCount] = useState(0);
  return (
    <div>
      <h1>Counter App</h1>
      Count: {count}
      <br />
      <br />
      <button
        onClick={() => {
          setCount(count + 1);
        }}
      >
        Increment
      </button>
      <button onClick={() => setCount(count - 1)}>Decrement</button>
    </div>
  );
}
