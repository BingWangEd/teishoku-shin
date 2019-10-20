import React, { useEffect, useState, useContext } from 'react';
import axios from 'axios';
import { LanguageContext } from './App.js';

function DataFetching(){
	const [posts, setPosts] = useState([])
	const language = useContext(LanguageContext)

	useEffect(()=>{
		axios.get('https://jsonplaceholder.typicode.com/posts')
		.then(res=>{
			console.log(res)
			setPosts(res.data)
		})
		.catch(err=>console.log(err))
	}, [])

	return (
		<div>
			<ul>
			{
				posts.map(post=><li key={post.id}>{post.title}</li>)
			}
			</ul>
			<h1>Language is {language}</h1>
		</div>
	)
}

export default DataFetching