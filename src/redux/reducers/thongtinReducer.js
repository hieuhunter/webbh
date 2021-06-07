import { THONGTIN_REQUESTED, THONGTIN_SUCCEED, THONGTIN_FAILED } from 'redux/constants';

const initialState = {
	thongtin: {
		tt: {},
		is_loading: false,
		errors: {}
	}
};
const thongtinReducer = (state = initialState, action) => {
	switch (action.type) {
		case THONGTIN_REQUESTED:
			return {
				...state,
				thongtin: {
					...state.thongtin,
					is_loading: true
				}
			};
		case THONGTIN_SUCCEED:
			return {
				...state,
				thongtin: {
					...state.thongtin,
					tt: action.payload.tt,
					is_loading: false
				}
			};
		case THONGTIN_FAILED:
			return {
				...state,
				thongtin: {
					...state.thongtin,
					errors: action.payload.errors
				}
			};
		default:
			return state;
	}
};

export default thongtinReducer;
