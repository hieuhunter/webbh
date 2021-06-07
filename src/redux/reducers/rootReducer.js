import { combineReducers } from 'redux';
import sanPhamReducer from 'redux/reducers/sanphamReducer';
import danhmucReducer from 'redux/reducers/danhmucReducer';
import authReducer from 'redux/reducers/authReducer';
import sanphamtheodm from 'redux/reducers/sanphamtheodm';
import giohangReducer from 'redux/reducers/giohangReducer';
import hoadonReducer from './hoadonReducer';
import thongtinReducer from './thongtinReducer';

const rootReducer = combineReducers({
	san_pham: sanPhamReducer,
	danh_muc: danhmucReducer,
	auth: authReducer,
	ds_dm: sanphamtheodm,
	gio_hang: giohangReducer,
	hoa_don: hoadonReducer,
	thong_tin: thongtinReducer
});

export default rootReducer;
