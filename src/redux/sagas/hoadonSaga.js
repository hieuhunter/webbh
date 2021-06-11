import axios from 'axios';
import { call, put, takeLatest } from 'redux-saga/effects';
import { haodonFailedAction, hoadonSucceedAction } from 'redux/actions/hoadonAction';
import { HOADON_REQUESTED } from 'redux/constants';

async function apiHoadon(checkout) {
	const { data } = await axios({
		method: 'POST',
		url: `${process.env.REACT_APP_API_URL}/thanhtoan`,
		data: checkout,
		headers: {
			Accept: 'application/json',
			'Content-Type': 'application/json',
			Authorization: 'Bearer ' + window.localStorage.getItem('token')
		}
	});
	return data;
}

function* Hoadon(action) {
	try {
		const {checkout} = action.payload;
		const res = yield call(apiHoadon,checkout);
		if (res.success) {
			yield put(hoadonSucceedAction(res.data));
			window.location.replace('/paytc');
		}
	} catch (err) {
		yield put(haodonFailedAction(err.message));
	}
}
export function* HoadonWatcher() {
	yield takeLatest(HOADON_REQUESTED, Hoadon);
}
