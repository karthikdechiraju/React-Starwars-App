import React, {Component} from 'react';
import { Link } from 'react-router';

class Search extends Component{
	constructor(props){
		super(props);

		this.state = {'term':''};
	}

	render(){
		return (
			<div>
				<p><Link to="/">Second Route</Link></p>
			</div>
		)
	}
}
				// <input onChange = {event => this.setState({'term':event.target.value})} />


export default Search;