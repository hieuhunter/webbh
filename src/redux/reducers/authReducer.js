import {
	DANGKY_REQUESTED,
	DANGKY_SUCCEED,
	DANGKY_FAILED,
	DANGNHAP_REQUESTED,
	DANGNHAP_SUCCEED,
	DANGNHAP_FAILED,
	DANGXUAT_REQUESTED,
	DANGXUAT_SUCCEED,
	DANGXUAT_FAILED
} from 'redux/constants';

const initialState = {
	login: {
		user: {},
		is_authenticated: false,
		is_loading: false,
		errors: {}
	},
	register: {
		user: {},
		is_loading: false,
		errors: {}
	},
	logout: {
		user: {},
		is_loading: false,
		errors: {}
	}
};

const authReducer = (state = initialState, action) => {
	switch (action.type) {
		case DANGKY_REQUESTED:
			return {
				...state,
				register: {
					...state.register,
					is_loading: true
				}
			};
		case DANGKY_SUCCEED:
			return {
				...state,
				register: {
					...state.register,
					user: action.payload.user,
					is_loading: false
				}
			};
		case DANGKY_FAILED:
			return {
				...state,
				register: {
					...state.register,
					errors: action.payload.errors,
					is_loading: false
				}
			};
		//dang nhap
		case DANGNHAP_REQUESTED:
			return {
				...state,
				login: {
					...state.login,
					is_loading: true
				}
			};
		case DANGNHAP_SUCCEED:
			return {
				...state,
				login: {
					...state.login,
					user: action.payload.user,
					is_authenticated: true,
					is_loading: false
				}
			};
		case DANGNHAP_FAILED:
			return {
				...state,
				login: {
					...state.login,
					errors: action.payload.errors,
					is_loading: false
				}
			};
		// Logout
		case DANGXUAT_REQUESTED:
			return {
				...state,
				logout: {
					...state.logout,
					is_loading: true
				}
			};
		case DANGXUAT_SUCCEED:
			return {
				...state,
				logout: {
					...state.logout,
					user: action.payload.user,
					is_loading: false
				}
			};
		case DANGXUAT_FAILED:
			return {
				...state,
				logout: {
					...state.logout,
					errors: action.payload.errors
				}
			};
		default:
			return state;
	}
};

export default authReducer;
