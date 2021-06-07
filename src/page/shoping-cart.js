import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import Layout from './Layout';
import {
	giohangRequestedAction,
	xoagiohangallRequestedAction,
	xoagiohangRequestedAction
} from 'redux/actions/giohangAction';
import { useDispatch, useSelector } from 'react-redux';

const tongGia = function (arr, qty, price) {
	return arr.reduce(function (a, b) {
		return a + b[qty] * b.sanpham[price];
	}, 0);
};

const Shoppingcart = () => {
	const dispatch = useDispatch();
	const gioHang = useSelector((state) => state.gio_hang.gio_hang);

	const xoaGioHang = (id) => {
		const gio_hang = {
			id_sp: id
		};
		dispatch(xoagiohangRequestedAction(gio_hang));
		dispatch(giohangRequestedAction());
	};
	const xoaAllGioHang = (id) => {
		const gio_hang = {
			id_kh: id
		};
		dispatch(xoagiohangallRequestedAction(gio_hang));
		dispatch(giohangRequestedAction());
	};

	useEffect(() => {
		dispatch(giohangRequestedAction());
	}, [dispatch]);

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
									<h2>Shopping Cart</h2>
									<div className="breadcrumb__option">
										<Link to="/">Home</Link>
										<span>Shopping Cart</span>
									</div>
								</div>
							</div>
						</div>
					</div>
				</section>
				<section className="shoping-cart spad">
					<div className="container">
						<div className="row">
							<div className="col-lg-12">
								<div className="shoping__cart__table">
									<table>
										<thead>
											<tr>
												<th className="shoping__product">Products</th>
												<th>Price</th>
												<th>Quantity</th>
												<th>Total</th>
												<th />
											</tr>
										</thead>
										<tbody>
											{gioHang.ghang.ctgiohang.map((sp) => (
												<tr key={sp.id}>
													<td className="shoping__cart__item">
														<img src={`${sp.sanpham.hinh}`} alt="" />

														<h5>{sp.sanpham.tensp}</h5>
													</td>
													<td className="shoping__cart__price">{sp.sanpham.gia}</td>
													<td className="shoping__cart__quantity">
														<div className="quantity">
															<div className="pro-qty">
																<input type="text" defaultValue={sp.so_luong} />
															</div>
														</div>
													</td>
													<td className="shoping__cart__total">{sp.gia}</td>
													<td className="shoping__cart__item__close">
														<a href="#!" onClick={xoaGioHang.bind(this, sp.sanpham.id)}>
															<span className="icon_close" />
														</a>
													</td>
												</tr>
											))}
										</tbody>
									</table>
								</div>
							</div>
						</div>
						<div className="row">
							<div className="col-lg-12">
								<div className="shoping__cart__btns">
									<a href="#!" className="site-btn" re>
										CONTINUE SHOPPING
									</a>
									<a
										href="#!"
										onClick={xoaAllGioHang.bind(this, gioHang.ghang.id_kh)}
										className="primary-btn cart-btn cart-btn-right"
									>
										Delete All
									</a>
								</div>
							</div>
							<div className="col-lg-6">
								<div className="shoping__continue">
									<div className="shoping__discount">
										<h5>Discount Codes</h5>
										<form action="#">
											<input type="text" placeholder="Enter your coupon code" />
											<button type="submit" className="site-btn">
												APPLY COUPON
											</button>
										</form>
									</div>
								</div>
							</div>
							<div className="col-lg-6">
								<div className="shoping__checkout">
									<h5>Cart Total</h5>
									<ul>
										<li>
											Tổng <span>{tongGia(gioHang.ghang.ctgiohang, 'so_luong', 'gia')}$</span>
										</li>
										<li>
											Tổng tất cả <span>{tongGia(gioHang.ghang.ctgiohang, 'so_luong', 'gia')}$</span>
										</li>
									</ul>
									<Link to="/checkout" className="primary-btn">
										PROCEED TO CHECKOUT
									</Link>
								</div>
							</div>
						</div>
					</div>
				</section>
			</div>
		</Layout>
	);
};
export default Shoppingcart;
