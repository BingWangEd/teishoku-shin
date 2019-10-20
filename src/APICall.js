import React, { useReducer, useEffect } from 'react';
import axios from 'axios';

const initialState = {
	isLoading: true,
	posts: [],
	error: ''
}

const reducer = (state, action) => {
	switch (action.type){
		case 'fetchPost':
			return {
				...state,
				isLoading: true
			};
		case 'receivedPost':
			return {
				...state,
				isLoading: false,
				posts: action.posts
			};
			case 'receivedError':
				return {
					...state,
					isLoading: false,
					error: action.err
				};
		default:
			return state;
	}
}

export function APICall() {
  const [ state, dispatch ] = useReducer( reducer, initialState )

	const fetchData = ()=>{
		dispatch({type: 'fetchPost'})
		axios.get('https://jsonplaceholder.typicode.com/posts')
		.then(res=>{
			console.log(res)
			dispatch({type: 'receivedPost', posts: res.data})
		})
		.catch(err=>{
			console.log(err)
			dispatch({type: 'receivedError', error: err})
		})
	}
  // useEffect (()=>{
	// 	dispatch({type: 'fetchPost'}, {})
	// 	axios.get('https://jsonplaceholder.typicode.com/posts')
	// 	.then(res=>{
	// 		console.log(res)
	// 		dispatch({type: 'receivedPost', posts: res.data})
	// 	})
	// 	.catch(err=>{
	// 		console.log(err)
	// 		dispatch({type: 'receivedError', error: err})
	// 	})
	// }, [])
	
  return (
		<div>
			{state.isLoading && <h1>It's loading</h1>}
			<button onClick={()=>fetchData()}>Fetch Data</button>
			<ul>
			{
				state.posts.map(post=><li key={post.id}>{post.title}</li>)
			}
			</ul>
		</div>
	);

}

export default APICall;