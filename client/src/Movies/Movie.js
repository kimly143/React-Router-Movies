import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import MovieCard from './MovieCard';

const Movie = (props) => {
	const [ movie, setMovie ] = useState(null);

	useEffect(
		() => {
			const id = props.match.params.id;

			axios
				.get(`http://localhost:5000/api/movies/${id}`)
				.then((response) => {
					setMovie(response.data);
				})
				.catch((error) => {
					console.error(error);
				});
		},
		[ props.match.params.id ]
	); //if value changes, re-run the effect function in useEffect.

	// Uncomment this only when you have moved on to the stretch goals
	// const saveMovie = () => {
	//   const addToSavedList = props.addToSavedList;
	//   addToSavedList(movie)
	// }

	if (!movie) {
		return <div>Loading movie information...</div>;
	}

	// const { title, director, metascore, stars } = movie;
	return (
		<div className="save-wrapper">
			<MovieCard movie={movie}/>
			<div className="save-button">Save</div>
		</div>
	);
};

export default Movie;
