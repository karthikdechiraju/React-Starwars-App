import axios from 'axios';
import { browserHistory } from 'react-router';

export const loginUser = ({username, password}) => {
	return (dispatch) =>{
		dispatch({ type:'LOGIN_USER' });
		var user_matched = false;
		axios.get(`https://swapi.co/api/people/?search=${username}`)
		.then((res)=>{
			for(name in res.data.results){
				if (res.data.results[name].name == username) {
					if (res.data.results[name].birth_year == password) {
						user_matched = true;
						loginUserSuccess(dispatch,res.data.results[name])
					}else{
						loginUserFail(dispatch)
					}
					break;
				}
			}
			if (!user_matched) {
				loginUserFail(dispatch)
			}
		})
		.catch(() => loginUserFail(dispatch))
	};
};


export const logoutUser = () => {
	return{
		type:'LOGOUT_USER'
	}
}



const loginUserFail = (dispatch) => {
	dispatch({
		type:'LOGIN_USER_FAIL'
	})
}

const loginUserSuccess = (dispatch,user) => {
	dispatch({
		type:'LOGIN_USER_SUCCESS',
		payload:user
	})
	browserHistory.push('/search');
}