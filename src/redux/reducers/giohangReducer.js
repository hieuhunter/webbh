import {
	GIOHANG_REQUESTED,
	GIOHANG_SUCCEED,
	GIOHANG_FAILED,
	THEMGIOHANG_REQUESTED,
	THEMGIOHANG_SUCCEED,
	THEMGIOHANG_FAILED,
	XOAGIOHANG_REQUESTED,
	XOAGIOHANG_SUCCEED,
	XOAGIOHANG_FAILED,
	XOAALLGIOHANG_REQUESTED,
	XOAALLGIOHANG_SUCCEED,
	XOAALLGIOHANG_FAILED
} from 'redux/constants';
const initialState = {
	gio_hang: {
		ghang: {
			ctgiohang: []
		},
		isLoading: true,
		errorMessage: {}
	},
	them_giohang: {
		ghang: {},
		isLoading: true,
		errorMessage: {}
	},
	xoa_giohang: {
		ghang: {},
		isLoading: true,
		errorMessage: {}
	},
	xoa_giohangALL: {
		ghang: {},
		isLoading: true,
		errorMessage: {}
	}
};
const giohangReducer = (state = initialState, action) => {
	switch (action.type) {
		// GIOHANG
		case GIOHANG_REQUESTED:
			return {
				...state,
				gio_hang: {
					...state.gio_hang,
					is_loading: true
				}
			};
		case GIOHANG_SUCCEED:
			return {
				...state,
				gio_hang: {
					...state.gio_hang,
					ghang: action.payload.gio_hang,
					is_loading: false
				}
			};
		case GIOHANG_FAILED:
			return {
				...state,
				gio_hang: {
					...state.gio_hang,
					errors: action.payload.errors
				}
			};
		// THEM GIO HANG
		case THEMGIOHANG_REQUESTED:
			return {
				...state,
				them_giohang: {
					...state.them_giohang,
					is_loading: true
				}
			};
		case THEMGIOHANG_SUCCEED:
			return {
				...state,
				them_giohang: {
					...state.them_giohang,
					ghang: action.payload.ghang,
					is_loading: false
				}
			};
		case THEMGIOHANG_FAILED:
			return {
				...state,
				them_giohang: {
					...state.them_giohang,
					errors: action.payload.errors
				}
			};
		// XOA GIO HANG
		case XOAGIOHANG_REQUESTED:
			return {
				...state,
				xoa_giohang: {
					...state.xoa_giohang,
					is_loading: true
				}
			};
		case XOAGIOHANG_SUCCEED:
			return {
				...state,
				xoa_giohang: {
					...state.xoa_giohang,
					ghang: action.payload.ghang,
					is_loading: false
				}
			};
		case XOAGIOHANG_FAILED:
			return {
				...state,
				xoa_giohang: {
					...state.xoa_giohang,
					errors: action.payload.errors
				}
			};
		// xoa tat ca gh
		case XOAALLGIOHANG_REQUESTED:
			return {
				...state,
				xoa_giohangALL: {
					...state.xoa_giohangALL,
					is_loading: true
				}
			};
		case XOAALLGIOHANG_SUCCEED:
			return {
				...state,
				xoa_giohangALL: {
					...state.xoa_giohangALL,
					ghang: action.payload.ghang,
					is_loading: false
				}
			};
		case XOAALLGIOHANG_FAILED:
			return {
				...state,
				xoa_giohangALL: {
					...state.xoa_giohangALL,
					errors: action.payload.errors
				}
			};
		default:
			return state;
	}
};

export default giohangReducer;
