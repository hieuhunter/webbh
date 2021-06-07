import {
	DANHMUC_REQUESTED,
	DANHMUC_SUCCEED,
	DANHMUC_FAILED,
	CTDANHMUC_REQUESTED,
	CTDANHMUC_SUCCEED,
	CTDANHMUC_FAILED
} from 'redux/constants';

const initialState = {
	ds_danh_muc: {
		danh_muc: [],
		is_loading: true,
		errors: {}
	},
	ct_danh_muc: {
		danh_muc: {},
		is_loading: true,
		errors: {}
	}
};

const DanhmucReducer = (state = initialState, action) => {
	switch (action.type) {
		// SANPHAM
		case DANHMUC_REQUESTED:
			return {
				...state,
				ds_danh_muc: {
					...state.ds_danh_muc,
					is_loading: true
				}
			};
		case DANHMUC_SUCCEED:
			return {
				...state,
				ds_danh_muc: {
					...state.ds_danh_muc,
					danh_muc: action.payload.danh_muc,
					is_loading: false
				}
			};
		case DANHMUC_FAILED:
			return {
				...state,
				ds_danh_muc: {
					...state.ds_danh_muc,
					errors: action.payload.errors
				}
			};
		// CTSANPHAM
		case CTDANHMUC_REQUESTED:
			return {
				...state,
				ct_danh_muc: {
					...state.ct_danh_muc,
					is_loading: true
				}
			};
		case CTDANHMUC_SUCCEED:
			return {
				...state,
				ct_danh_muc: {
					...state.ct_danh_muc,
					san_pham: action.payload.danh_muc,
					is_loading: false
				}
			};
		case CTDANHMUC_FAILED:
			return {
				...state,
				ct_danh_muc: {
					...state.ct_danh_muc,
					errors: action.payload.errors
				}
			};
		default:
			return state;
	}
};

export default DanhmucReducer;
