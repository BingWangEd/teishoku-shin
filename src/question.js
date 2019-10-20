import React, { useState, useEffect } from 'react';
import './App.css';

function App() {
	
	const [countOne, setCountOne] = useState(0)
	const [countTwo, setCountTwo] = useState(0)

 
	const incrementOne = (countOne) =>{
		setCountOne(countOne+1)
	}

	const incrementTwo = (countTwo) =>{
		setCountTwo(countTwo+1)
	}

	const isEven = () => {
		let i = 0
		while(i<99999999999) i++
		return countOne % 2 === 0
	}

	return (
		<div className="App">
      <div>
				<button onClick={incrementOne}>Counter One - {countOne}</button>
				<span>{isEven() ? 'Even' : 'Odd'}</span>
			</div>
			<div>
				<button onClick={incrementTwo}>Counter Two - {countTwo}</button>
			</div>
		</div>
	)
}

export default App;
