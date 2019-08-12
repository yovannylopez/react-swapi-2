import React, { Component, Fragment } from 'react';
import { Switch, Route, withRouter } from 'react-router-dom';

import Header from './components/Header';
import MovieList from './containers/MovieList';
import MovieDetail from './containers/MovieDetail';

import GlobalStyle from './shared/styles/Global';

class App extends Component {
	render() {
		return (
			<Fragment>
				<Header />
				<Switch>
					<Route path="/movie/:id" component={MovieDetail} />
					<Route path="/" component={MovieList} />
				</Switch>
				<GlobalStyle />
			</Fragment>
		);
	}
}

export default withRouter(App);
