import React, { useReducer, useEffect } from 'react';
import axios from 'axios';
import useGetLocation from './useGetLocation';
import { fetchData } from './helper';

const HIT_PER_PAGE = 1;
const RANGE = 1;

const initialState = {}

const reducer = (state, action) => {
	switch (action.type){
		case 'isFetchingData':
			return {
				isLoading: true
			}
		case 'receivedData':
			console.log(action.payload)
			return {
				number: action.payload.total_hit_count
			}
		case 'receivedError':
			return {
				error: action.payload
			}
		default:
			return state
	}
}

const useGetTotalRestaurantNumberData = () => {
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
			const GnaviRestAPIKey = process.env.REACT_APP_GNAVI_REST_API_KEY;
			const inquiry = `https://api.gnavi.co.jp/RestSearchAPI/v3/?keyid=${GnaviRestAPIKey}&latitude=${location.lat}&longitude=${location.log}&hit_per_page=${HIT_PER_PAGE}&range=${RANGE}`;
			fetchData(inquiry)
		}).catch((message)=>{
			console.log(message)
		})
	}

	return [state, getRestaurantData]
}

export default useGetTotalRestaurantNumberData;
