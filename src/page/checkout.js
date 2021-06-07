import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import Layout from './Layout';
import { Formik } from 'formik';
import { hoadonRequestedAction } from 'redux/actions/hoadonAction';
import classNames from 'classnames';
const Checkout = () => {
	const dispatch = useDispatch();
	const hoadon = useSelector((state) => state.hoa_don.hoadon);
	const gioHang = useSelector((state) => state.gio_hang.gio_hang);
	const [phivc, setPhivc] = useState('20000');

	const initialValues = {
		id_kh: '',
		ho_ten: '',
		sdt: '',
		email: '',
		ngay_dat: '',
		ngay_giao: '',
		dia_chi: '',
		da_duyet: '',
		da_thanh_toan: '',
		da_giao_hang: '',
		phi_van_chuyen: '20000',
		Ma_buudien: ''
	};
	const onSubmit = (values) => {
		const user = {
			ho_ten: values.ho_ten,
			user_name: values.user_name,
			email: values.email,
			password: values.password,
			sdt: values.sdt,
			dia_chi: values.dia_chi
		};
		console.log(user);
		dispatch(hoadonRequestedAction(user));
	};
	const tongGia = function (arr, qty, price) {
		return arr.reduce(function (a, b) {
			return a + b[qty] * b.sanpham[price];
		}, 0);
	};
	/* const tongSL = function (arr, qty, price) {
		return arr.reduce(function (a, b) {
			return a + b[qty] * b.so_luong[price];
		}, 0);
	}; */

	return (
		<Layout>
			<div>
				<section
					className="breadcrumb-section set-bg"
					data-setbg="img/breadcrumb.jpg"
					style={{
						backgroundImage: 'url(img/breadcrumb.jpg)'
					}}
				>
					<div className="container">
						<div className="row">
							<div className="col-lg-12 text-center">
								<div className="breadcrumb__text">
									<h2>Checkout</h2>
									<div className="breadcrumb__option">
										<Link to="./checkout">Home</Link>
										<span>Checkout</span>
									</div>
								</div>
							</div>
						</div>
					</div>
				</section>
				<section className="checkout spad">
					<div className="container">
						<div className="row">
							<div className="col-lg-12">
								<h6>
									<span className="icon_tag_alt" /> Have a coupon? <a href="#!">Click here</a> to enter your code
								</h6>
							</div>
						</div>
						<div className="checkout__form">
							<h4>Thông tin thanh toán</h4>
							<Formik initialValues={initialValues} onSubmit={onSubmit}>
								{(props) => (
									<form action="#" onSubmit={props.handleSubmit}>
										<div className="row">
											<div className="col-lg-8 col-md-6">
												<div className="checkout__input">
													<p>
														Họ và tên<span>*</span>
													</p>
													<input
														type="text"
														className={classNames('form-control', {
															'is-invalid': props.touched.ho_ten && props.errors.ho_ten
														})}
														placeholder="Ho Va Ten"
														id="ho_ten"
														name="ho_ten"
														onChange={props.handleChange}
														onBlur={props.handleBlur}
														value={props.values.ho_ten}
													/>
													{props.touched.ho_ten && props.errors.ho_ten && (
														<div id="invalid-feedback">{props.errors.ho_ten}</div>
													)}
												</div>

												<div className="checkout__input">
													<p>
														Địa chỉ<span>*</span>
													</p>
													<input
														type="text"
														className={classNames('form-control', {
															'is-invalid': props.touched.dia_chi && props.errors.dia_chi
														})}
														placeholder="dia chi"
														id="dia_chi"
														name="dia_chi"
														onChange={props.handleChange}
														onBlur={props.handleBlur}
														value={props.values.dia_chi}
													/>
													{props.touched.dia_chi && props.errors.dia_chi && (
														<div id="invalid-feedback">{props.errors.dia_chi}</div>
													)}
												</div>

												<div className="checkout__input">
													<p>
														Mã bưu điện / ZIP<span>*</span>
													</p>
													<input
														type="text"
														className={classNames('form-control', {
															'is-invalid': props.touched.Ma_buudien && props.errors.Ma_buudien
														})}
														placeholder="Ma_buudien "
														id="Ma_buudien"
														name="Ma_buudien"
														onChange={props.handleChange}
														onBlur={props.handleBlur}
														value={props.values.Ma_buudien}
													/>
													{props.touched.Ma_buudien && props.errors.Ma_buudien && (
														<div id="invalid-feedback">{props.errors.Ma_buudien}</div>
													)}
												</div>
												<div className="row">
													<div className="col-lg-6">
														<div className="checkout__input">
															<p>
																Phone<span>*</span>
															</p>
															<input
																type="text"
																className={classNames('form-control', {
																	'is-invalid': props.touched.sdt && props.errors.sdt
																})}
																placeholder="sdt "
																id="sdt"
																name="sdt"
																onChange={props.handleChange}
																onBlur={props.handleBlur}
																value={props.values.sdt}
															/>
															{props.touched.sdt && props.errors.sdt && (
																<div id="invalid-feedback">{props.errors.sdt}</div>
															)}
														</div>
													</div>
													<div className="col-lg-6">
														<div className="checkout__input">
															<p>
																Email<span>*</span>
															</p>
															<input
																type="text"
																className={classNames('form-control', {
																	'is-invalid': props.touched.email && props.errors.email
																})}
																placeholder="email "
																id="email"
																name="email"
																onChange={props.handleChange}
																onBlur={props.handleBlur}
																value={props.values.email}
															/>
															{props.touched.email && props.errors.email && (
																<div id="invalid-feedback">{props.errors.email}</div>
															)}
														</div>
													</div>
												</div>
												<div className="checkout__input">
													<p>
														Ngày giao<span>*</span>
													</p>
													<select
														value={props.values.phi_van_chuyen}
														onChange={props.handleChange}
														onBlur={props.handleBlur}
														className={classNames('form-control', {
															'is-invalid': props.touched.phi_van_chuyen && props.errors.phi_van_chuyen
														})}
														id="phi_van_chuyen"
														name="phi_van_chuyen"
													>
														<option value={'20000'}>Giao trong tuần!</option>
														<option value={'60000'}>Giao trong 24h!</option>
													</select>
													{setPhivc(parseInt(props.values.phi_van_chuyen))}
													{props.touched.dia_chi && props.errors.dia_chi && (
														<div id="invalid-feedback">{props.errors.dia_chi}</div>
													)}
												</div>
												<div className="checkout__input__checkbox">
													<label htmlFor="acc">
														Create an account?
														<input type="checkbox" id="acc" />
														<span className="checkmark" />
													</label>
												</div>
												<p>
													Create an account by entering the information below. If you are a returning customer please
													login at the top of the page
												</p>
												<div className="checkout__input">
													<p>
														Account Password<span>*</span>
													</p>
													<input type="text" />
												</div>
												<div className="checkout__input__checkbox">
													<label htmlFor="diff-acc">
														Ship to a different address?
														<input type="checkbox" id="diff-acc" />
														<span className="checkmark" />
													</label>
												</div>
												<div className="checkout__input">
													<p>
														Order notes<span>*</span>
													</p>
													<input type="text" placeholder="Notes about your order, e.g. special notes for delivery." />
												</div>
											</div>
											<div className="col-lg-4 col-md-6">
												<div className="checkout__order">
													<h4>Your Order</h4>
													<div className="checkout__order__products">
														Products <span>Total</span>
													</div>
													{gioHang.ghang.ctgiohang.map((sp) => (
														<ul key={sp.id}>
															<li>
																{sp.sanpham.tensp} X {sp.so_luong}
																<span>{sp.gia}đ</span>
															</li>
														</ul>
													))}
													<div className="checkout__order__subtotal">
														Tổng giá sản phẩm <span>{tongGia(gioHang.ghang.ctgiohang, 'so_luong', 'gia')}đ</span>
													</div>
													<div className="checkout__order__total">
														Phí vận chuyển <span>{phivc}đ</span>
													</div>
													<div className="checkout__order__total">
														Tổng tất cả{' '}
														<span>{parseInt(tongGia(gioHang.ghang.ctgiohang, 'so_luong', 'gia')) + phivc}đ</span>
													</div>
													<div className="checkout__input__checkbox">
														<label htmlFor="acc-or">
															Create an account?
															<input type="checkbox" id="acc-or" />
															<span className="checkmark" />
														</label>
													</div>
													<p>
														Lorem ipsum dolor sit amet, consectetur adip elit, sed do eiusmod tempor incididunt ut
														labore et dolore magna aliqua.
													</p>
													<div className="checkout__input__checkbox">
														<label htmlFor="payment">
															Check Payment
															<input type="checkbox" id="payment" />
															<span className="checkmark" />
														</label>
													</div>
													<div className="checkout__input__checkbox">
														<label htmlFor="paypal">
															Paypal
															<input type="checkbox" id="paypal" />
															<span className="checkmark" />
														</label>
													</div>
													{hoadon.is_loading ? (
														<button type="submit" className="site-btn" disabled>
															<span className="spinner-grow spinner-grow-sm mr-1" role="status" aria-hidden="true" />
															PLACE ORDER
														</button>
													) : (
														<button type="submit" className="site-btn">
															PLACE ORDER
														</button>
													)}
												</div>
											</div>
										</div>
									</form>
								)}
							</Formik>
						</div>
					</div>
				</section>
			</div>
		</Layout>
	);
};

export default Checkout;
