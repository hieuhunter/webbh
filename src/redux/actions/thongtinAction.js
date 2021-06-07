import { THONGTIN_REQUESTED, THONGTIN_SUCCEED, THONGTIN_FAILED } from 'redux/constants';

export const thongtinRequestedAction = () => ({
	type: THONGTIN_REQUESTED
});
export const thongtinSucceedAction = (tt) => ({
	type: THONGTIN_SUCCEED,
	payload: {
		tt: tt
	}
});
export const thongtinFailedAction = (errors) => ({
	type: THONGTIN_FAILED,
	payload: {
		errors: errors
	}
});
