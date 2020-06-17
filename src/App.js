import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';
import Palette from './Palette';
import seedColors from './seedColors';
import { generatePalette } from './colorHelpers';

class App extends Component {
	render() {
		// console.log(generatePalette(seedColors[2]))
		return (
			<Switch>
				<Route exact path='/' render={() => <h1>Palette list goes here</h1>} />
				<Route exact path='/palette/:id' render={() => <h1>individual palette</h1>} />
			</Switch>
			// <Palette palette={generatePalette(seedColors[4])} />
		);
	}
}

export default App;
