import React, { Component, useContext } from 'react';
import './login.scss';

import { GlobalState } from '../../../context/context';

export default class Login extends Component {
	constructor(props) {
		super(props);
	}

	handleOnSubmit = () => {};

	render() {
		return (
			<div className="login-container">
				<form onSubmit={this.handleOnSubmit}>
					<label htmlFor="" />
				</form>
			</div>
		);
	}
}

Login.contextType = GlobalState;
