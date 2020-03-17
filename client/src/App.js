import React, { useState } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Movie from './Movies/Movie';
import MovieList from './Movies/MovieList';
import SavedList from './Movies/SavedList';

const App = () => {
	const [ savedList, setSavedList ] = useState([]);

	const addToSavedList = (movie) => {
		setSavedList([ ...savedList, movie ]);
	};

	return (
		<div>
			<Router>
        {/* have to move SaveList into router so link inside of it work */}
				<SavedList list={savedList} />
				<Route exact path="/" component={MovieList} />
				<Route path="/movies/:id" component={Movie} />
			</Router>,
		</div>
	);
};

export default App;
