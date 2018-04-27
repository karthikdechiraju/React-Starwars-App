const INITIAL_STATE = {
	planets:null,
	is_searching:false
};

export default (state = INITIAL_STATE, action) => {
	switch(action.type){
		case 'SHOW_PLANETS':
			return { ...state, planets:action.payload,is_searching:false}

		case 'SEARCHING':
			return { ...state, is_searching:true,planets:null}

		default:
			return state;
	}
}