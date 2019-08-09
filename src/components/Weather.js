import React, {Component} from 'react';
import PropTypes from 'prop-types';

export default class Weather extends Component{
	static propTypes = {
		location: PropTypes.string
	}

	constructor(){
		super();
		this.state = {
			temperature: '',
			description: ''
		};
	}

	componentWillMount(){
		this._loadWeather();
	}

	_loadWeather(){
		const api = `https://api.openweathermap.org/data/2.5/forecast?q=${this.props.location}&cnt=3&units=metric&appid=42905b45c73a2763dd8827a8d802be68`;
		fetch(api)
			.then((response) => {
				return response.json();
			})
			.then((myJson) => {
				if(myJson.cod == 200){
					console.log(myJson.city.timezone, new Date().toLocaleDateString(26000), new Date().toLocaleDateString(36000));
					this.setState({
						temperature: Math.round(myJson.list[0].main.temp),
						description: myJson.list[0].weather[0].description.toUpperCase()
					});
				}
				else{
					console.log("Can not get data from API");
				}
			});
	}

	render(){
		return (<div>
			<hr/>
			<p>{this.state.description}</p>
			<p>{this.state.temperature} <span>&deg;C</span></p>
		</div>);
	}
}