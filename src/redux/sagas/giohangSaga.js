import axios from 'axios';
import { call, put, takeLatest } from 'redux-saga/effects';
import {
	themgiohangFailedAction,
	themgiohangSucceedAction,
	giohangSucceedAction,
	giohangFailedAction,
	xoagiohangSucceedAction,
	xoagiohangFailedAction,
	xoagiohangallSucceedAction,
	xoagiohangallFailedAction
} from 'redux/actions/giohangAction';
import {
	THEMGIOHANG_REQUESTED,
	GIOHANG_REQUESTED,
	XOAGIOHANG_REQUESTED,
	XOAALLGIOHANG_REQUESTED
} from 'redux/constants';

async function apiaddGiohang(gio_hang) {
	const { data } = await axios({
		method: 'GET',
		url: 'http://127.0.0.1:8000/api/addgiohang',
		params: gio_hang,
		headers: {
			Accept: 'application/json',
			'Content-Type': 'application/json',
			Authorization: 'Bearer ' + window.localStorage.getItem('token')
		}
	});
	return data;
}

function* addGiohang(action) {
	try {
		const { gio_hang } = action.payload;
		const res = yield call(apiaddGiohang, gio_hang);
		if (res.success) {
			yield put(themgiohangSucceedAction(res.data));
		}
	} catch (err) {
		yield put(themgiohangFailedAction(err.message));
	}
}

export function* addGiohangWatcher() {
	yield takeLatest(THEMGIOHANG_REQUESTED, addGiohang);
}

async function apiGiohang() {
	const { data } = await axios({
		method: 'GET',
		url: `http://127.0.0.1:8000/api/danhsach_gh`,
		headers: {
			Accept: 'application/json',
			'Content-Type': 'application/json',
			Authorization: 'Bearer ' + window.localStorage.getItem('token')
		}
	});
	return data;
}

function* Giohang() {
	try {
		const res = yield call(apiGiohang);
		if (res.success) {
			yield put(giohangSucceedAction(res.data));
		}
	} catch (err) {
		yield put(giohangFailedAction(err.message));
	}
}

export function* GiohangWatcher() {
	yield takeLatest(GIOHANG_REQUESTED, Giohang);
}
//xoa gio hang
async function apixoaGiohang(gio_hang) {
	const { data } = await axios({
		method: 'DELETE',
		url: `http://127.0.0.1:8000/api/xoagh`,
		params: gio_hang,
		headers: {
			Accept: 'application/json',
			'Content-Type': 'application/json',
			Authorization: 'Bearer ' + window.localStorage.getItem('token')
		}
	});
	return data;
}

function* xoaGiohang(action) {
	try {
		const { gio_hang } = action.payload;
		const res = yield call(apixoaGiohang, gio_hang);
		if (res.success) {
			yield put(xoagiohangSucceedAction(res.data));
		}
	} catch (err) {
		yield put(xoagiohangFailedAction(err.message));
	}
}

export function* xoaGiohangWatcher() {
	yield takeLatest(XOAGIOHANG_REQUESTED, xoaGiohang);
}
//xoa tat ca gio hang
async function apixoaallGiohang(gio_hang) {
	const { data } = await axios({
		method: 'DELETE',

		url: `${process.env.REACT_APP_API_URL}/xoaall`,

		params: gio_hang,
		headers: {
			Accept: 'application/json',
			'Content-Type': 'application/json',
			Authorization: 'Bearer ' + window.localStorage.getItem('token')
		}
	});
	return data;
}

function* xoaallGiohang(action) {
	try {
		const { gio_hang } = action.payload;
		const res = yield call(apixoaallGiohang, gio_hang);
		if (res.success) {
			yield put(xoagiohangallSucceedAction(res.data));
		}
	} catch (err) {
		yield put(xoagiohangallFailedAction(err.message));
	}
}

export function* xoaallGiohangWatcher() {
	yield takeLatest(XOAALLGIOHANG_REQUESTED, xoaallGiohang);
}
