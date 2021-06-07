import axios from 'axios';
import { call, put, takeLatest } from 'redux-saga/effects';
import { sanphamtheodmFailedAction, sanphamtheodmSucceedAction } from 'redux/actions/sanphamtheodm';
import { SPTHEODM_REQUESTED } from 'redux/constants';

async function apiSanphamtheodm(id) {
	const { data } = await axios({
		method: 'GET',
		url: `http://127.0.0.1:8000/api/danhmuc/${id}`
	});
	return data;
}

function* sanphamtheodm(action) {
	try {
		const { id } = action.payload;
		const res = yield call(apiSanphamtheodm, id);
		console.log(res);
		if (res.success) {
			yield put(sanphamtheodmSucceedAction(res.data));
		}
	} catch (err) {
		yield put(sanphamtheodmFailedAction(err.message));
	}
}

export function* SanphamtheodmWatcher() {
	yield takeLatest(SPTHEODM_REQUESTED, sanphamtheodm);
}
