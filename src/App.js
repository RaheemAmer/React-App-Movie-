/* eslint-disable no-unused-vars */
import React, { useEffect, useState} from 'react';
import Movie from './components/Movie';
// https://api.themoviedb.org/3/search/company?api_key=6964dab72cec99db329a3051b4a15c3f&page=1

const FEATURED_API = "https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=6964dab72cec99db329a3051b4a15c3f&page=1";
const SEARCH_API = " https://api.themoviedb.org/3/search/movie?api_key=6964dab72cec99db329a3051b4a15c3f&language=en-US&page=1&include_adult=false";



function App (){
	// const [ movies, setMovies] = useState([]);
	const [ movies, setMovies] = useState('');
	const [searchTerm, setSearchTerm] = useState('');

	useEffect(() => {
		fetch(FEATURED_API)
			.then((res) => res.json())
			.then((data) => {
				console.log(data);
				setMovies(data.results);
			});
	}, []);

	const handleOnSubmit = (e) => {
		e.preventDefault();
		if(searchTerm)
		{
			fetch(SEARCH_API + searchTerm)
			.then((res) => res.json())
			.then((data) => {
				console.log(data);
				setMovies(data.results);
			});
			setSearchTerm('');
		}

	};

	const handleOnChange = (e) => {
		setSearchTerm(e.target.value);

	};

	return (
	<React.Fragment>
		<header>
			<form onSubmit={handleOnSubmit}>
			<input
				type="search" 
				className="search" 
				placeholder='search...'
				value={searchTerm}
				onChange={handleOnChange}
				/>
			</form>
		</header>
		<div className="container">
			{movies.length > 0 && movies.map((movie) => <Movie key = {movie.id} {...movie} />)}
		</div>
		
	</React.Fragment>
	);
}

export default App;
