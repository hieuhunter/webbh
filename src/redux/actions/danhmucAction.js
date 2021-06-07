import {
	DANHMUC_REQUESTED,
	DANHMUC_SUCCEED,
	DANHMUC_FAILED,
	CTDANHMUC_REQUESTED,
	CTDANHMUC_SUCCEED,
	CTDANHMUC_FAILED
} from 'redux/constants';

export const danhmucRequestedAction = () => ({
	type: DANHMUC_REQUESTED
});
export const danhmucSucceedAction = (danh_muc) => ({
	type: DANHMUC_SUCCEED,
	payload: {
		danh_muc: danh_muc
	}
});
export const danhmucFailedAction = (errors) => ({
	type: DANHMUC_FAILED,
	payload: {
		errors: errors
	}
});
//
export const ctdanhmucRequestedAction = () => ({
	type: CTDANHMUC_REQUESTED
});
export const ctdanhmucSucceedAction = (payload) => ({
	type: CTDANHMUC_SUCCEED,
	payload
});
export const ctdanhmucFailedAction = (payload) => ({
	type: CTDANHMUC_FAILED,
	payload
});
