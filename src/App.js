import React, { useReducer } from 'react';
import './App.css';
import useGetTotalRest from './useGetTotalRest';
import useDataState from './useDataState';
import axios from 'axios';

function App() {
	const [location] = useGetTotalRest()
	const [dataState, fetchData] = useDataState(location)

	console.log(`rendering app:${location.lat} ${location.log}`)

	return (
		<div className="App">
      <button onClick={()=>fetchData()}>Show me some restaurants</button>
			{(dataState.isLoading) && 
				(<h1>Data is loading ... </h1>)
			}
		</div>
	)
}

export default App;
