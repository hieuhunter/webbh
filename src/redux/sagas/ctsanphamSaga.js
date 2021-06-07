import axios from 'axios';
import { call, put, takeLatest } from 'redux-saga/effects';
import { ctsanphamFailedAction, ctsanphamSucceedAction } from 'redux/actions/sanphamAction';
import { CTSANPHAM_REQUESTED } from 'redux/constants';

async function api_ctSanPham(id) {
	const { data } = await axios({
		method: 'GET',
		url: `http://127.0.0.1:8000/api/sanpham/${id}`
	});
	return data;
}

function* ctSanPham(action) {
	try {
		const { id } = action.payload;
		const res = yield call(api_ctSanPham, id);
		console.log(res);
		if (res.success) {
			yield put(ctsanphamSucceedAction(res.data));
		}
	} catch (err) {
		yield put(ctsanphamFailedAction(err.message));
	}
}

export function* ctSanPhamWatcher() {
	yield takeLatest(CTSANPHAM_REQUESTED, ctSanPham);
}
