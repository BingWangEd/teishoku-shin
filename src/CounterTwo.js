import React, { useReducer } from 'react';
import './App.css';

const initialValue = { count: 0 }
let reducer = (state, action) => {
  switch (action.type) {
    case 'increment':
      return {count: state.count + 1};
    case 'decrement':
      return {count: state.count - 1};
    case 'reset':
      return {count: 0};
    default:
      return state;
  }
}

function App() {
  let [state, dispatch] = useReducer(reducer, initialValue)

	return (
		<div className="App">
      <h1>Count: {state.count}</h1>
      <button onClick={()=>dispatch({type: 'increment'})}>increment</button>
			<button onClick={()=>dispatch({type: 'decrement'})}>decrement</button>
      <button onClick={()=>dispatch({type: 'reset'})}>reset</button>
		</div>
	)
}

export default App;
