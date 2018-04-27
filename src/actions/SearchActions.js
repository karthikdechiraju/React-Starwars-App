import axios from 'axios';
import { browserHistory } from 'react-router';

export const searching = (text) => {
	return (dispatch) =>{
		dispatch({type:'SEARCHING'})
		axios.get(`https://swapi.co/api/planets/?search=${text}`)
		.then((res)=>{
			display_planets(dispatch,res.data.results)
		})
	};
}


const display_planets = (dispatch,data) => {
	dispatch({
		type:'SHOW_PLANETS',
		payload:data
	})
}