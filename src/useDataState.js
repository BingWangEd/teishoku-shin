import React, { useReducer } from 'react';
import axios from 'axios';

const initialState = {
	isLoading: false,
	posts: [],
	error: ''
}

const reducer = (state, action) => {
	switch (action.type){
		case 'isFetchingData':
			return {
				...state,
				isLoading: true
			}
		case 'receivedData':
			return {
				...state,
				isLoading: false,
				data: action.payload
			}
		case 'receivedError':
			return {
				...state,
				isLoading: false,
				error: action.payload
			}
		default:
			return state
	}
}

function useDataState(location) {
	const [state, dispatch] = useReducer(reducer, initialState)

	const fetchData = () => {
		const key='5a02b734aa0809483ce5cf236aad280e'
		const inquiry = 'https://api.gnavi.co.jp/RestSearchAPI/v3/?keyid='+key+'&latitude='+location.lat+'&longitude='+location.log+'&hit_per_page=3&range=5'
		console.log(inquiry)
		dispatch({type: 'isFetchingData'})
		axios.get(inquiry)
		.then(res=>{
			console.log(res)
			dispatch({type: 'receivedData', payload: res.data})
		})
		.catch(err=>{
			console.log(err)
			dispatch({type: 'receivedError', payload: err})
		})
	}
	return [state, fetchData]
}

export default useDataState;
