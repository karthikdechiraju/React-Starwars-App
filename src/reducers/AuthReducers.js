const INITIAL_STATE = {
	is_logging:false,
	login_error:false,
	user:{}
};

export default (state = INITIAL_STATE, action) => {
	switch(action.type){
		case 'LOGIN_USER':
			return { ...state, is_logging:true,login_error:false}

		case 'LOGIN_USER_FAIL':
			return { ...state, is_logging:false,login_error:true}

		case 'LOGIN_USER_SUCCESS':
			return { ...state, is_logging:false,user:action.payload}

		default:
			return state;
	}
}