import { HOADON_REQUESTED, HOADON_SUCCEED, HOADON_FAILED } from 'redux/constants';

const initialState = {
	hoadon: {
		cthd: {
			sanpham: []
		},
		isLoading: false,
		errorMessage: {}
	}
};
const hoadonReducer = (state = initialState, action) => {
	switch (action.type) {
		// SANPHAM
		case HOADON_REQUESTED:
			return {
				...state,
				hoadon: {
					...state.hoadon,
					is_loading: true
				}
			};
		case HOADON_SUCCEED:
			return {
				...state,
				hoadon: {
					...state.hoadon,
					cthd: action.payload.hoadon,
					is_loading: false
				}
			};
		case HOADON_FAILED:
			return {
				...state,
				hoadon: {
					...state.hoadon,
					errors: action.payload.errors
				}
			};
		default:
			return state;
	}
};

export default hoadonReducer;
