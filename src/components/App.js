import React, { Component } from 'react';
import Time from './Time';
import Weather from './Weather';

class App extends Component{
	render(){
		return (
			<div>
				<h1>Weather App</h1>
				<Time />
				<Weather location = 'Sydney,AU'/>
			</div>);
	}
}

export default App;