import {
	SANPHAM_REQUESTED,
	SANPHAM_SUCCEED,
	SANPHAM_FAILED,
	CTSANPHAM_REQUESTED,
	CTSANPHAM_SUCCEED,
	CTSANPHAM_FAILED
} from 'redux/constants';

export const sanphamRequestedAction = () => ({
	type: SANPHAM_REQUESTED
});
export const sanphamSucceedAction = (san_pham) => ({
	type: SANPHAM_SUCCEED,
	payload: {
		san_pham: san_pham
	}
});
export const sanphamFailedAction = (errors) => ({
	type: SANPHAM_FAILED,
	payload: {
		errors: errors
	}
});
//
export const ctsanphamRequestedAction = (id) => ({
	type: CTSANPHAM_REQUESTED,
	payload: {
		id: id
	}
});
export const ctsanphamSucceedAction = (san_pham) => ({
	type: CTSANPHAM_SUCCEED,
	payload: {
		san_pham: san_pham
	}
});
export const ctsanphamFailedAction = (errors) => ({
	type: CTSANPHAM_FAILED,
	errors: errors
});
