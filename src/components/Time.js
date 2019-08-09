import React, {Component} from 'react';

export default class Time extends Component{
	constructor(props){
		super(props);
		this.state = {
			time : [],
			date : "",
			toggler : true
		}
	}

	componentWillMount(){
		this.timer = setInterval(this._setTime, 1000);
	}

	componentWillUnmount(){
		clearInterval(this.timer);
	}

	_setTime=()=>{
		var months = [
			"January", 
			"February", 
			"March", 
			"April", 
			"May", 
			"June", 
			"July", 
			"August", 
			"September", 
			"October", 
			"November", 
			"December"
		];
		var date = new Date();
		var h = date.getHours();
		var m = date.getMinutes()<10?`0${date.getMinutes()}`:date.getMinutes();
		var month = months[date.getMonth()];
		var day = date.getDate();
		this.setState({
			time: [h, m],
			date: `${month} ${day}`,
			toggler: !this.state.toggler
		});
	}

	render(){
		return (
			<div>
				<p>{this.state.time[0]}<span style={{visibility: this.state.toggler?"hidden":"visible"}}>:</span>{this.state.time[1]}</p>
				<p>{this.state.date}</p>
			</div>
		);
	}
}