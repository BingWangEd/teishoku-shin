import React, { useState, useEffect } from 'react';
import './App.css';
import useGeolocation from './useGeolocation';

function App() {
	const [location] = useGeolocation()

	console.log(`rendering app:${location.lat} ${location.log}`)
	return (
		<div className="App">
      <button></button>
		</div>
	)
}

export default App;
