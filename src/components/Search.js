import React, {Component} from 'react';
import { browserHistory } from 'react-router';
import { connect } from 'react-redux';
import { searching } from '../actions';
import _ from 'lodash';
import Planet from './Planets'

class Search extends Component{
	constructor(props){
		super(props);
	}




	componentWillMount(){
		if (this.props.user == null) {
			browserHistory.push('/');
		}

	}

	reduceSize(num,max){
		return (num/max * 80)
	}

	renderData(){
		return this.props.planets.map(function(item){
			return <p className="planet_item" key={item.name}>{item.name}</p>
		})
	}

	renderPlanets(){
		if (this.props.is_searching) {
			return (
				<div className="inital_search shadow">
					<p>SEARCHING...</p>
				</div>
			)
		}else{
			if (this.props.planets && this.props.planets.length > 0) {
				this.props.planets.sort(function(a,b){
					return a.diameter - b.diameter;
				})
				if (this.props.planets[this.props.planets.length - 1].diameter == 'unknown') {
					this.props.planets[this.props.planets.length - 1].diameter = 30000;
				}
				for (var i = 0; i < this.props.planets.length; i++) {
					this.props.planets[i]['x'] = Math.floor(Math.random()*80)+ 10;
					this.props.planets[i]['y'] = Math.floor(Math.random()*80)+ 10;
					if (this.props.planets[i].diameter == 'unknown') {
						this.props.planets[i]['r'] = this.reduceSize(8000, this.props.planets[this.props.planets.length - 1].diameter);
					}else{
						this.props.planets[i]['r'] = this.reduceSize(this.props.planets[i].diameter, this.props.planets[this.props.planets.length - 1].diameter);
					}
				}
				
				return(
					<div className="graph_holder">
						<div className="main_div">
							<div className="graph_div">
								<p>PLANETS FOUND</p>
								<div className="shadow graph">
									<Planet data= {this.props.planets} />
								</div>
							</div>
							<div className="list_div">
								<p>LIST OF PLANETS FOUND</p>
								<div className="shadow graph list">
									{this.renderData()}
								</div>
							</div>
						</div>
					</div>
				)
			}else if (this.props.planets == null) {
				return(
					<div className="inital_search shadow">
						<p>PLANETS WILL BE DISPLAYED HERE</p>
					</div>
				)
			}else{
				return(
					<div className="inital_search shadow">
						<p>NO PLANET FOUND</p>
					</div>
				)
			}
		}
	}
	




	render(){
		if (this.props.user) {
			if (this.props.user.name == "Luke Skywalker") {
				var handleSearch = _.debounce(() => {
					if (this.input.value.length > 0) {
						this.props.searching(this.input.value)
					}
				}, 300);
			}else{
				var handleSearch = _.throttle(() => {
					if (this.input.value.length > 0) {
						this.props.searching(this.input.value)
					}
				}, 4000);   // not more than 15 requests per minute
			}
		}
		

		return (
			<div className="search_holder">
				<input ref={(input) => this.input = input} className="search_bar shadow" placeholder="Search about planets..." 
					onChange={handleSearch}
				/>

				{this.renderPlanets()}
			</div>
		)
	}
}


const mapStateToProps = (state) => {
	const { has_logged_in, user } = state.login;
	const { planets, is_searching } = state.search;
	return { has_logged_in, user, planets, is_searching };
}


export default connect(mapStateToProps,{ searching })(Search);