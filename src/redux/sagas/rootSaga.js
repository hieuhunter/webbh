import { all } from 'redux-saga/effects';
import { dsSanPhamWatcher } from 'redux/sagas/sanphamSaga';
import { dsDanhmucWatcher } from 'redux/sagas/danhmucSaga';
import { authRegisterWatcher, authLoginWatcher, checkloginWatcher } from 'redux/sagas/authSaga';
import { SanphamtheodmWatcher } from 'redux/sagas/sanphamtheodm';
import { ctSanPhamWatcher } from 'redux/sagas/ctsanphamSaga';
import { addGiohangWatcher, GiohangWatcher, xoaallGiohangWatcher, xoaGiohangWatcher } from 'redux/sagas/giohangSaga';
import { HoadonWatcher } from './hoadonSaga';
import { ThongtinWatcher } from './thongtinSaga';

function* rootSaga() {
	yield all([
		dsSanPhamWatcher(),
		dsDanhmucWatcher(),
		authRegisterWatcher(),
		authLoginWatcher(),
		checkloginWatcher(),
		SanphamtheodmWatcher(),
		ctSanPhamWatcher(),
		addGiohangWatcher(),
		GiohangWatcher(),
		xoaGiohangWatcher(),
		xoaallGiohangWatcher(),
		HoadonWatcher(),
		ThongtinWatcher()
	]);
}

export default rootSaga;
