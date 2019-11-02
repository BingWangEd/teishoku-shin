import React, { useReducer } from 'react';
import './App.css';
import useGetTotalRestaurantNumberData from './useGetTotalRestaurantNumber';

function App() {
	const [totalRestNumber, fetchData] = useGetTotalRestaurantNumberData();

	return (
		<div className="App">
      <button>Show me some restaurants</button>
			{(totalRestNumber.isLoading) && 
				(<h1>Data is loading ... </h1>)
			}
		</div>
	)
}

export default App;
