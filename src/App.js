import React, { useReducer } from 'react';
import './App.css';
import useGetTotalRestaurantNumber from './useGetTotalRestaurantNumber';
//import useGetRestaurantData from './useGetRestaurantData';

function App() {
	const [numberState] = useGetTotalRestaurantNumber();
	//const [restState, getRestaurantData] = useGetRestaurantData();

	let HIT_PER_PAGE = 1;
	let RANGE = 1;

	return (
		<div className="App">
			<button 
			// onClick={(e)=>{
			// 	e.preventDefault();
			// 	//getRestaurantData();
			// }
			>Show me some restaurants</button>
			{(numberState.isLoading) && 
				(<h1>Data is loading ... </h1>)
			}
		</div>
	)
}

export default App;
