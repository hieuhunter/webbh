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

export const giohangRequestedAction = () => ({
	type: GIOHANG_REQUESTED
});
export const giohangSucceedAction = (gio_hang) => ({
	type: GIOHANG_SUCCEED,
	payload: {
		gio_hang: gio_hang
	}
});
export const giohangFailedAction = (errors) => ({
	type: GIOHANG_FAILED,
	payload: {
		errors: errors
	}
});

export const themgiohangRequestedAction = (gio_hang) => ({
	type: THEMGIOHANG_REQUESTED,
	payload: {
		gio_hang: gio_hang
	}
});
export const themgiohangSucceedAction = (gio_hang) => ({
	type: THEMGIOHANG_SUCCEED,
	payload: {
		gio_hang: gio_hang
	}
});
export const themgiohangFailedAction = (errors) => ({
	type: THEMGIOHANG_FAILED,
	payload: {
		errors: errors
	}
});
//XOA GIO HANG
export const xoagiohangRequestedAction = (gio_hang) => ({
	type: XOAGIOHANG_REQUESTED,
	payload: {
		gio_hang: gio_hang
	}
});
export const xoagiohangSucceedAction = (gio_hang) => ({
	type: XOAGIOHANG_SUCCEED,
	payload: {
		gio_hang: gio_hang
	}
});
export const xoagiohangFailedAction = (errors) => ({
	type: XOAGIOHANG_FAILED,
	payload: {
		errors: errors
	}
});
// XOA TAT CA GH
export const xoagiohangallRequestedAction = (gio_hang) => ({
	type: XOAALLGIOHANG_REQUESTED,
	payload: {
		gio_hang: gio_hang
	}
});
export const xoagiohangallSucceedAction = (gio_hang) => ({
	type: XOAALLGIOHANG_SUCCEED,
	payload: {
		gio_hang: gio_hang
	}
});
export const xoagiohangallFailedAction = (errors) => ({
	type: XOAALLGIOHANG_FAILED,
	payload: {
		errors: errors
	}
});
