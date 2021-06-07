import {
	DANGKY_REQUESTED,
	DANGKY_SUCCEED,
	DANGKY_FAILED,
	DANGNHAP_REQUESTED,
	DANGNHAP_SUCCEED,
	DANGNHAP_FAILED,
	CHECK_LOGIN,
	DANGXUAT_REQUESTED,
	DANGXUAT_SUCCEED,
	DANGXUAT_FAILED
} from 'redux/constants';

export const dangkyRequestedAction = (user) => ({
	type: DANGKY_REQUESTED,
	payload: {
		user: user
	}
});
export const dangkySucceedAction = (user) => ({
	type: DANGKY_SUCCEED,
	payload: {
		user: user
	}
});
export const dangkyFailedAction = (errors) => ({
	type: DANGKY_FAILED,
	payload: {
		errors: errors
	}
});
//
export const dangnhapRequestedAction = (user) => ({
	type: DANGNHAP_REQUESTED,
	payload: {
		user: user
	}
});
export const dangnhapSucceedAction = (user, is_authenticated) => ({
	type: DANGNHAP_SUCCEED,
	payload: {
		user: user,
		is_authenticated: is_authenticated
	}
});
export const dangnhapFailedAction = (errors) => ({
	type: DANGNHAP_FAILED,
	payload: {
		errors: errors
	}
});
export const checkloginAction = () => ({
	type: CHECK_LOGIN
});
// logout

export const dangxuatRequestedAction = (user) => ({
	type: DANGXUAT_REQUESTED,
	payload: {
		user: user
	}
});
export const dangxuatSucceedAction = (user) => ({
	type: DANGXUAT_SUCCEED,
	payload: {
		user: user
	}
});
export const dangxuatFailedAction = (errors) => ({
	type: DANGXUAT_FAILED,
	payload: {
		errors: errors
	}
});
