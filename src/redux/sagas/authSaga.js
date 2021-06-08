import axios from 'axios';
import { call, put, takeLatest } from 'redux-saga/effects';
import {
	dangkyFailedAction,
	dangkySucceedAction,
	dangnhapSucceedAction,
	dangnhapFailedAction,
	dangxuatSucceedAction,
	dangxuatFailedAction
} from 'redux/actions/authAction';
import { CHECK_LOGIN, DANGKY_REQUESTED, DANGNHAP_REQUESTED, DANGXUAT_REQUESTED } from 'redux/constants';

async function apiRegister(user) {
	const { data } = await axios({
		method: 'POST',
		url: `${process.env.REACT_APP_API_URL}/register`,

		data: user,
		headers: {
			Accept: 'application/json',
			'Content-Type': 'application/json'
		}
	});
	return data;
}

function* authRegister(action) {
	try {
		const { user } = action.payload;
		const res = yield call(apiRegister, user);
		if (res.success) {
			yield put(dangkySucceedAction(res.data));
			window.location.replace('/login');
		} else {
			yield put(dangkyFailedAction(res.errors));
		}
	} catch (err) {
		yield put(dangkyFailedAction(err.message));
	}
}

export function* authRegisterWatcher() {
	yield takeLatest(DANGKY_REQUESTED, authRegister);
}

//dang nhap
async function apiLogin(user) {
	const { data } = await axios({
		method: 'POST',
		url: `${process.env.REACT_APP_API_URL}/login`,
		data: user,
		headers: {
			Accept: 'application/json',
			'Content-Type': 'application/json'
		}
	});
	return data;
}
async function apicheck_Login(user) {
	const { data } = await axios({
		method: 'GET',
		url: `${process.env.REACT_APP_API_URL}/user`,
		data: user,
		headers: {
			Accept: 'application/json',
			'Content-Type': 'application/json',
			Authorization: 'Bearer ' + window.localStorage.getItem('token')
		}
	});
	return data;
}
function* check_login() {
	try {
		if (window.localStorage.getItem('token')) {
			const res = yield call(apicheck_Login);
			if (res.success) {
				const user = {
					id: res.data.id,
					user_name: res.data.user_name
				};
				yield put(dangnhapSucceedAction(user));
			}
		}
	} catch (err) {
		yield put(dangnhapFailedAction(err.message));
	}
}
function* authLogin(action) {
	try {
		const { user } = action.payload;
		const res = yield call(apiLogin, user);
		if (res.success) {
			const user = {
				id: res.data.id,
				user_name: res.data.user_name
			};
			yield put(dangnhapSucceedAction(user));
			window.localStorage.setItem('token', res.data.access_token);
			window.location.replace('/');
		} else {
			yield put(dangnhapFailedAction(res.errorss));
		}
	} catch (err) {
		yield put(dangnhapFailedAction(err.message));
	}
}

export function* authLoginWatcher() {
	yield takeLatest(DANGNHAP_REQUESTED, authLogin);
}
export function* checkloginWatcher() {
	yield takeLatest(CHECK_LOGIN, check_login);
}
// Logout

async function apiLogout() {
	const { data } = await axios({
		method: 'GET',
		url: `${process.env.REACT_APP_API_URL}/logout`,
		headers: {
			Accept: 'application/json',
			'Content-Type': 'application/json',
			Authorization: 'Bearer ' + window.localStorage.getItem('token')
		}
	});
	return data;
}

function* Logout() {
	try {
		const res = yield call(apiLogout);
		if (res.success) {
			yield put(dangxuatSucceedAction(res.data));
			window.location.replace('/login');
		}
	} catch (err) {
		yield put(dangxuatFailedAction(err.message));
	}
}

export function* authLogoutWatcher() {
	yield takeLatest(DANGXUAT_REQUESTED, Logout);
}
