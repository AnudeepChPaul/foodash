/*
	App class implementation
	by Anudeep Chandra Paul
*/

import React, {Component} from 'react';
import {connect} from 'react-redux';
import {Route, Switch} from 'react-router-dom';
import * as actionCreators from './store/actions/app-actions';
import './App.scss';
import Main from './container/main/Main';
import Login from './container/login/Login';

class App extends Component {
	loader = () => (
		<div className='ui active inverted dimmer'>
			<div className='ui massive text loader'>Loading</div>
		</div>
	);

	getComponentByAppStatus = () => {
		switch (this.props.appStatus) {
			case 'INIT':
				return this.loader();
			case 'AUTH':
				return (
					<Main
						appStatus={this.props.appStatus}
						title={this.props.title}
						subHeader={this.props.subHeader}
					/>
				);
			default:
				return 'Login';
		}
	};

	render = () => {
		console.log('[App.js] render');
		return (
			<div className='App ui segment'>
				<Switch>
					<Route path='/login' component={Login}/>
					<Route exact path='/' component={Main}/>
				</Switch>
			</div>
		);
	};

	componentDidMount = () => {
		this.props.validateAuthToken('some_token').then(() => {
			if (this.props.appStatus === 'AUTH') {
				this.props.fetchApplicationData();
			} else {
				// eslint-disable-next-line no-restricted-globals
				history.pushState('login', 'Login');
			}
		});
	};
}

const mapStateToProps = state => ({
	appStatus: state.applicationState.status,
	title: state.applicationState.title,
	subHeader: state.applicationState.subHeader
});

const mapDispatchToProps = dispatch => ({
	validateAuthToken: token =>
		dispatch(actionCreators.validateAuthToken(token)),
	fetchApplicationData: () => dispatch(actionCreators.fetchApplicationData())
});

export default connect(
	mapStateToProps,
	mapDispatchToProps
)(App);
