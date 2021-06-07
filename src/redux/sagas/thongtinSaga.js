import axios from 'axios';
import { call, put, takeLatest } from 'redux-saga/effects';
import { THONGTIN_REQUESTED } from 'redux/constants';
import { thongtinFailedAction, thongtinSucceedAction } from 'redux/actions/thongtinAction';

async function apiThongtin(user) {
	const { data } = await axios({
		method: 'GET',
		url: `${process.env.REACT_APP_API_URL}/thongtin`,
		data: user,
		headers: {
			Accept: 'application/json',
			'Content-Type': 'application/json',
			Authorization: 'Bearer ' + window.localStorage.getItem('token')
		}
	});
	return data;
}

function* Thongtin() {
	try {
		const res = yield call(apiThongtin);
		if (res.success) {
			yield put(thongtinSucceedAction(res.data));
		}
	} catch (err) {
		yield put(thongtinFailedAction(err.message));
	}
}

export function* ThongtinWatcher() {
	yield takeLatest(THONGTIN_REQUESTED, Thongtin);
}
