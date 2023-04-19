import { useState } from "react";


const UseStateBasics = () => {
  const [count, setCount] = useState(0);

  const increment = () => {
    setCount(prevCount => prevCount + 1);
  }

  const decrement = () => {
    setCount(prevCount => prevCount - 1)
  }
  return (
    <>
      <h2>useState basics</h2>
      <h6>Incrementing and Decrementing a value using states</h6>
      <h2>{count}</h2>
      <button type="button" style={{marginRight:'20px'}} onClick={increment}>Increment</button>
      <button type ="button" onClick={decrement}>Decrement</button>
    </>
  )
};

export default UseStateBasics;
