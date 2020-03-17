import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { BrowserRouter as Router, Route } from 'react-router-dom';

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

	const { title, director, metascore, stars } = movie;
	return (
		<div className="save-wrapper">
			<div className="movie-card">
				<h2>{title}</h2>
				<div className="movie-director">
					Director: <em>{director}</em>
				</div>
				<div className="movie-metascore">
					Metascore: <strong>{metascore}</strong>
				</div>
				<h3>Actors</h3>

				{stars.map((star) => (
					<div key={star} className="movie-star">
						{star}
					</div>
				))}
			</div>
			<div className="save-button">Save</div>
		</div>
	);
};

export default Movie;
