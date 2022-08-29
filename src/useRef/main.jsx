import { useEffect, useRef, useState } from "react";

//state basic example
//running this will cause the whole page to re-render
// function State() {
//   const [count, setCount] = useState(0);

//   const handle = () => {
//     const updatedCount = count + 1;
//     console.log(`Clicked ${updatedCount} times`);
//     setCount(updatedCount);
//   };

//   console.log("I rendered!");

//   return <button onClick={handle}>Click me</button>;
//   }
//ref basic example
//running this will not cause the whole page to re-render
  // function Ref() {
  //   const countRef = useRef(0);

  //   const handle = () => {
  //     countRef.current++;
  //     console.log(`Clicked ${countRef.current} times`);
  //   };
  //   console.log("I rendered!");
  
  //   return <button onClick={handle}>Click me</button>;
  // }
  //basic example of useRef to access dom elements using the ref
  // function Ref() {
  //   const inputRef = useRef();
  
  //   const focusinput = () => {
  //     inputRef.current.focus();
  //   };
  //   console.log("Im re-rendering")
  //   return (
  //     <div>
  //       <input ref={inputRef} type="text" />
  //       <button onClick={focusinput}>Focus the input</button>
  //     </div>
  //   );
  // }
  function Ref() {
    const [inputValue, setInputValue] = useState("");
    const previousInputValue = useRef("");
  
    useEffect(() => {
      previousInputValue.current = inputValue;
    }, [inputValue]);
  
    return (
      <>
        <input
          type="text"
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
        />
        <h2>Current Value: {inputValue}</h2>
        <h2>Previous Value: {previousInputValue.current}</h2>
      </>
    );
  }
export default Ref;