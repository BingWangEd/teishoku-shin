import React, { useReducer, useEffect } from 'react';
import axios from 'axios';
import useGetLocation from './useGetLocation';

const initialState = {
	isLoading: false,
	error: ''
}

const reducer = (state, action) => {
	switch (action.type){
		case 'isFetchingData':
			return {
				...state,
				isLoading: true
			}
		case 'receivedTotalNumberData':
			return {
				...state,
				isLoading: false,
				restaurant_number: action.payload.total_hit_count
			}
			case 'receivedRestaurantData':
				return {
					...state,
					isLoading: false,
					restaurants: action.payload.rest
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

export function useGetNumberData() {
	const [location] = useGetLocation()
	const [state, dispatch] = useReducer(reducer, initialState)
	useEffect(()=>{
    getRestaurantData()
	}, [location])

	let locationPromise = new Promise((resolve, reject)=>{
		if (location) {
			resolve(location)
		} else {
			reject('Location is not here yet.')
		}
	})

	const getRestaurantData = () => {
		locationPromise.then((location) => {
			fetchData(location)
		}).catch((message)=>{
			console.log(message)
		})
	}

	const fetchData = (location) => {
		const key='5a02b734aa0809483ce5cf236aad280e'
		const inquiry = 'https://api.gnavi.co.jp/RestSearchAPI/v3/?keyid='+key+'&latitude='+location.lat+'&longitude='+location.log+'&hit_per_page=3&range=1'
		dispatch({type: 'isFetchingData'})
		axios.get(inquiry)
		.then(res=>{
			console.log(info)
			switch (info) {
				case 'getNumber':
					return dispatch({type: 'receivedTotalNumberData', payload: res.data})
				default:
					console.log('Wrong fetchDate info type');
			}
		})
		.catch(err=>{
			console.log(err)
			dispatch({type: 'receivedError', payload: err})
		})
	}

	return [state, getRestaurantData]
}

export function useGetRestaurantData() {
	const [location] = useGetLocation()
	const [state, dispatch] = useReducer(reducer, initialState)

	const fetchData = (location, hitPerPage=1, range=1, offset) => {
		const key='5a02b734aa0809483ce5cf236aad280e'
		const inquiry = 'https://api.gnavi.co.jp/RestSearchAPI/v3/?keyid='+key+'&latitude='+location.lat+'&longitude='+location.log+'&hit_per_page=3&range=1'
		dispatch({type: 'isFetchingData'})
		axios.get(inquiry)
		.then(res=>{
			console.log(info)
			switch (info) {
				case 'getNumber':
					return dispatch({type: 'receivedTotalNumberData', payload: res.data})
				case 'getRestaurant':
					return dispatch({type: 'receivedRestaurantData', payload: res.data})
				default:
					console.log('Wrong fetchDate info type');
			}
		})
		.catch(err=>{
			console.log(err)
			dispatch({type: 'receivedError', payload: err})
		})
	}

	return [state, getRestaurantData]
}
