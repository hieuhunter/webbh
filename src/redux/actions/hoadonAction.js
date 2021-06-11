import { HOADON_REQUESTED, HOADON_SUCCEED, HOADON_FAILED } from 'redux/constants';
export const hoadonRequestedAction = (checkout) => ({
	type: HOADON_REQUESTED,
	payload: {
		checkout: checkout
	}
});
export const hoadonSucceedAction = (hoa_don) => ({
	type: HOADON_SUCCEED,
	payload: {
		hoa_don: hoa_don
	}
});
export const haodonFailedAction = (errors) => ({
	type: HOADON_FAILED,
	payload: {
		errors: errors
	}
});
