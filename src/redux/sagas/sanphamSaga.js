import axios from 'axios';
import { call, put, takeLatest } from 'redux-saga/effects';
import { sanphamFailedAction, sanphamSucceedAction } from 'redux/actions/sanphamAction';
import { SANPHAM_REQUESTED } from 'redux/constants';

async function apiSanPham() {
	const { data } = await axios({
		method: 'GET',
		url: 'http://127.0.0.1:8000/api/sanpham'
	});
	return data;
}

function* dsSanPham() {
	try {
		const res = yield call(apiSanPham);
		console.log(res);
		if (res.success) {
			yield put(sanphamSucceedAction(res.data));
		}
	} catch (err) {
		yield put(sanphamFailedAction(err.message));
	}
}

export function* dsSanPhamWatcher() {
	yield takeLatest(SANPHAM_REQUESTED, dsSanPham);
}
