import axios from 'axios';
import { call, put, takeLatest } from 'redux-saga/effects';
import { danhmucFailedAction, danhmucSucceedAction } from 'redux/actions/danhmucAction';
import { DANHMUC_REQUESTED } from 'redux/constants';

async function apiDanhmuc() {
	const { data } = await axios({
		method: 'GET',
		url: 'http://127.0.0.1:8000/api/danhmuc'
	});
	return data;
}

function* dsDanhmuc() {
	try {
		const res = yield call(apiDanhmuc);
		if (res.success) {
			yield put(danhmucSucceedAction(res.data));
		}
	} catch (err) {
		yield put(danhmucFailedAction(err.message));
	}
}

export function* dsDanhmucWatcher() {
	yield takeLatest(DANHMUC_REQUESTED, dsDanhmuc);
}
