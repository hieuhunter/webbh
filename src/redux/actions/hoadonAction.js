import { HOADON_REQUESTED, HOADON_SUCCEED, HOADON_FAILED } from 'redux/constants';
export const hoadonRequestedAction = (id) => ({
	type: HOADON_REQUESTED,
	payload: {
		id: id
	}
});
export const hoadonSucceedAction = (san_pham) => ({
	type: HOADON_SUCCEED,
	payload: {
		san_pham: san_pham
	}
});
export const haodonFailedAction = (errors) => ({
	type: HOADON_FAILED,
	payload: {
		errors: errors
	}
});
