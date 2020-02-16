import React from 'react';
import Head from 'next/head';
import Nav from '../components/nav';
import { Login } from '../components/Auth/index';
import LinearProgress from '@material-ui/core/LinearProgress';

import { GlobalState } from '../context/context';

import '../styles/main.scss';

class App extends React.Component {
	constructor(props) {
		super(props);

		this.setLoader = (value) => {
			this.setState((state) => ({
				...state,
				isLoading: value
			}));
		};

		this.state = {
			isLoading: true,
			setLoader: this.setLoader
		};
	}

	render() {
		return (
			<div>
				<Head>
					<title>Home</title>
					<link rel="icon" href="/favicon.ico" />
				</Head>
				<GlobalState.Provider value={this.state}>
					{this.state.isLoading ? <LinearProgress /> : null}
					<Login />
				</GlobalState.Provider>
			</div>
		);
	}
}

export default App;
