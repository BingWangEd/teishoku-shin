import { useReducer } from 'react';
import useGetLocation from './useGetLocation';
import { fetchData } from './helper';
import useGetTotalRestaurantNumber from './useGetTotalRestaurantNumber';

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
				restaurant: action.payload
			}
		case 'receivedError':
			return {
				error: action.payload
			}
		default:
			return state
	}
}

const useGetRestaurantData = (number) => {
	const [location] = useGetLocation()
	const [state, dispatch] = useReducer(reducer, initialState)
	const [numberState] = useGetTotalRestaurantNumber();

	const getRestaurantData = () => {
		RestTotalNumberPromise.then((number) => {
			//const restNumber = pickRestaurant(number)
			const restNumber = 2
			const GnaviRestAPIKey = process.env.REACT_APP_GNAVI_REST_API_KEY;
			const inquiry = `https://api.gnavi.co.jp/RestSearchAPI/v3/?keyid=${GnaviRestAPIKey}&latitude=${location.lat}&longitude=${location.log}&hit_per_page=${HIT_PER_PAGE}&range=${RANGE}&offset=${restNumber}`;
			fetchData(inquiry, dispatch)
		}).catch((message)=>{
			console.log(message)
		})
	}

	const pickRestaurant = (upperBound) => Math.floor(Math.random() * Math.floor(upperBound))

	const RestTotalNumberPromise = new Promise((resolve, reject)=>{
		if (numberState) {
			resolve(numberState)
		} else {
			reject('RestTotalNumber is not here yet.')
		}
	})

	return [state, getRestaurantData]
}

export default useGetRestaurantData;
