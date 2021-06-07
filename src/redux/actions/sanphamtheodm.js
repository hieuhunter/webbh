import { SPTHEODM_REQUESTED, SPTHEODM_SUCCEED, SPTHEODM_FAILED } from 'redux/constants';
export const sanphamtheodmRequestedAction = (id) => ({
	type: SPTHEODM_REQUESTED,
	payload: {
		id: id
	}
});
export const sanphamtheodmSucceedAction = (san_pham) => ({
	type: SPTHEODM_SUCCEED,
	payload: {
		san_pham: san_pham
	}
});
export const sanphamtheodmFailedAction = (errors) => ({
	type: SPTHEODM_FAILED,
	payload: {
		errors: errors
	}
});
