import { SPTHEODM_REQUESTED, SPTHEODM_SUCCEED, SPTHEODM_FAILED } from 'redux/constants';
const initialState = {
	sptheo_dm: {
		san_pham: [],
		is_loading: true,
		errors: {}
	}
};
const sanphamtheodm = (state = initialState, action) => {
	switch (action.type) {
		// SANPHAM
		case SPTHEODM_REQUESTED:
			return {
				...state,
				sptheo_dm: {
					...state.sptheo_dm,
					is_loading: true
				}
			};
		case SPTHEODM_SUCCEED:
			return {
				...state,
				sptheo_dm: {
					...state.sptheo_dm,
					san_pham: action.payload.san_pham,
					is_loading: false
				}
			};
		case SPTHEODM_FAILED:
			return {
				...state,
				sptheo_dm: {
					...state.sptheo_dm,
					errors: action.payload.errors
				}
			};
		default:
			return state;
	}
};

export default sanphamtheodm;
