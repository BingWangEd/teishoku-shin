import React, { useState } from 'react';

function UseCounterTwo() {
    const [count, setCount] = useState(0)
  
    const increment = () => {
      setCount(prevValue=>prevValue+1)
    }
  
    const decrement = () => {
      setCount(prevValue=>prevValue-1)
    }
  
    const reset = () => {
      setCount(0)
    }
  
    return [count, increment, decrement, reset]
  }
  
  export default UseCounterTwo;