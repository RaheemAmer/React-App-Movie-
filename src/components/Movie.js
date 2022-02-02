import React from 'react';
const IMG_API = "https://image.tmdb.org/t/p/w1280";


const Movie = ({ title, poster_path, overview, release_date,
	vote_average }) => (
		<div className="movie">
				<img src= {IMG_API + poster_path} alt={title} />
				<div className="movie-info">
					<h3>{title}</h3>
					<span>{vote_average}</span>
				</div>

				<div className="movie-over">
					<h4>Overview:</h4>
					<p>{overview}</p>
					<hr />
					<h4>Release Date:</h4>
					<p>{release_date}</p>
				</div>
		</div>
	);


export default Movie;
