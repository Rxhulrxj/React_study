import React, { useEffect, useState } from 'react'

function CounterApp() {
    const [count, setCount] = useState(0);  
    const [calculation, setCalculation] = useState(0);
      // useEffect(() => {
      //   setTimeout(() => {
      //     setCount((count) => count + 1);
      //   }, 1000);
      // },[]); 
      useEffect(() => {
        let timer = setTimeout(() => {
        setCount((count) => count + 1);
      }, 1000);
    
      return () => clearTimeout(timer)
      }, []);
      // useEffect(() => {
      //   setCalculation(() => count * 2);
      // }, [count])
    return (  
      <div>  
        <p>You clicked {count} times</p>    
        <button onClick={() => setCount((c) => c + 1)}>Click</button>
        <p>Calculation: {calculation}</p>
      </div>  
    );  
  }  

export default CounterApp