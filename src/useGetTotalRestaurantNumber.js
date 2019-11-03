import { useReducer, useEffect } from 'react';
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

const useGetTotalRestaurantNumber = () => {
	const [location, locationPromise] = useGetLocation()
	const [state, dispatch] = useReducer(reducer, initialState)

	useEffect(()=>{
		const getRestaurantData = () => {
			locationPromise.then((location) => {
				const GnaviRestAPIKey = process.env.REACT_APP_GNAVI_REST_API_KEY;
				const inquiry = `https://api.gnavi.co.jp/RestSearchAPI/v3/?keyid=${GnaviRestAPIKey}&latitude=${location.lat}&longitude=${location.log}&hit_per_page=${HIT_PER_PAGE}&range=${RANGE}`;
				console.log(inquiry)
				fetchData(inquiry, dispatch)
			}).catch((message)=>{
				console.log(message)
			})
		}

    getRestaurantData()
	}, [location])

	return [state]
}

export default useGetTotalRestaurantNumber;
