import axios from 'axios';
import { call, put, takeLatest } from 'redux-saga/effects';
import { haodonFailedAction, hoadonSucceedAction } from 'redux/actions/hoadonAction';
import { HOADON_REQUESTED } from 'redux/constants';

async function apiHoadon() {
	const { data } = await axios({
		method: 'GET',
		url: `${process.env.REACT_APP_API_URL}/thanhtoan`
	});
	return data;
}

function* Hoadon() {
	try {
		const res = yield call(apiHoadon);
		if (res.success) {
			yield put(hoadonSucceedAction(res.data));
		}
	} catch (err) {
		yield put(haodonFailedAction(err.message));
	}
}

export function* HoadonWatcher() {
	yield takeLatest(HOADON_REQUESTED, Hoadon);
}
