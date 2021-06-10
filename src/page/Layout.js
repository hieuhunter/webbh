import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { danhmucRequestedAction } from 'redux/actions/danhmucAction';
import { checkloginAction, dangxuatRequestedAction } from 'redux/actions/authAction';
import { useDispatch, useSelector } from 'react-redux';
import { giohangRequestedAction } from 'redux/actions/giohangAction';
import Dropdown from 'react-bootstrap/Dropdown';

const tongSoLuong = function (arr, prop) {
	return arr.reduce(function (a, b) {
		return a + b[prop];
	}, 0);
};

const tongGia = function (arr, qty, price) {
	return arr.reduce(function (a, b) {
		return a + b[qty] * b.sanpham[price];
	}, 0);
};
const Layout = ({ children, isMenu = false }) => {
	const dispatch = useDispatch();
	const dsDanhmuc = useSelector((state) => state.danh_muc.ds_danh_muc);
	const login = useSelector((state) => state.auth.login);
	const gioHang = useSelector((state) => state.gio_hang.gio_hang);

	/* const handleLogout = useSelector((state) => state.auth.logout); */

	useEffect(() => {
		dispatch(checkloginAction());
		dispatch(danhmucRequestedAction());
		dispatch(giohangRequestedAction());
	}, [dispatch]);

	const handleLogout = (e) => {
		e.preventDefault();
		dispatch(dangxuatRequestedAction());
	};
	return (
		<>
			<header className="header">
				<div className="header__top">
					<div className="container">
						<div className="row">
							<div className="col-lg-6">
								<div className="header__top__left">
									<ul>
										<li>
											<i className="fa fa-envelope" /> hieu@colorlib.com
										</li>
										<li>Free Shipping for all Order of $99</li>
									</ul>
								</div>
							</div>
							<div className="col-lg-6">
								<div className="header__top__right">
									<div className="header__top__right__social">
										<a href="#!">
											<i className="fa fa-facebook" />
										</a>
										<a href="#!">
											<i className="fa fa-twitter" />
										</a>
										<a href="#!">
											<i className="fa fa-linkedin" />
										</a>
										<a href="#!">
											<i className="fa fa-pinterest-p" />
										</a>
									</div>
									<div className="header__top__right__language">
										<img src="img/language.png" alt="" />
										<div>English</div>
										<span className="arrow_carrot-down" />
										<ul>
											<li>
												<a href="#!">VietNam</a>
											</li>
											<li>
												<a href="#!">English</a>
											</li>
										</ul>
									</div>
									<div className="header__top__right__auth">
										<Link to="/Login">Login</Link>
									</div>
									{login.is_authenticated && (
										<div>
											<div className="header__top__right__auth ml-3">
												<Link to="/thongtin">
													<i className="fa fa-user" />
													{login.user?.user_name}
												</Link>
											</div>
											<div className="header__top__right__auth ml-3" onClick={handleLogout}>
												<Link to="/login">logout</Link>
											</div>
										</div>
									)}
								</div>
							</div>
						</div>
					</div>
				</div>
				<div className="container">
					<div className="row">
						<div className="col-lg-3">
							<div className="header__logo">
								<Link to="/">
									<img src="/img/logo.png" alt="" />
								</Link>
							</div>
						</div>
						<div className="col-lg-6">
							<nav className="header__menu">
								<ul>
									<li>
										<Link to="/">Home</Link>
									</li>
									<li className="active">
										<Link to="./shop-gird">Shop</Link>
									</li>
									<li>
										<a href="#!">Pages</a>
										<ul className="header__menu__dropdown">
											<li>
												<Link to="./shop-details">Shop Details</Link>
											</li>
											<li>
												<Link to="./shoping-cart">Shoping Cart</Link>
											</li>
											<li>
												<Link to="./checkout">Check Out</Link>
											</li>
											<li>
												<Link to="./blog-details">Blog Details</Link>
											</li>
										</ul>
									</li>
									<li>
										<Link to="./blog-details">Blog</Link>
									</li>
									<li>
										<Link to="./checkout">Contact</Link>
									</li>
								</ul>
							</nav>
						</div>
						<div className="col-lg-3">
							<div className="header__cart">
								<ul>
									<li>
										<Link to="/checkout">
											<i className="fa fa-heart" /> <span>1</span>
										</Link>
									</li>
									<li>
										<Link to="/shoping-cart">
											<i className="fa fa-shopping-bag" />{' '}
											<span>{tongSoLuong(gioHang.ghang.ctgiohang, 'so_luong')}</span>
										</Link>
									</li>
								</ul>
								<div className="header__cart__price">
									Giá: <span>{tongGia(gioHang.ghang.ctgiohang, 'so_luong', 'gia')}₫</span>
								</div>
							</div>
						</div>
					</div>
					<div className="humberger__open">
						<i className="fa fa-bars" />
					</div>
				</div>
			</header>
			<section className="hero">
				<div className="container">
					<div className="row">
						<Dropdown className="hero__categories">
							<Dropdown.Toggle className="hero__categories__all">
								<i className="fa fa-bars"></i>
								All departments
							</Dropdown.Toggle>

							<Dropdown.Menu>
								{dsDanhmuc.danh_muc.map((dm) => (
									<Dropdown.Item key={dm.id}>
										<Link to={`/shop-gird/${dm.id_dm}`}>{dm.tendm}</Link>
									</Dropdown.Item>
								))}
							</Dropdown.Menu>
						</Dropdown>

						<div className="col-lg-9">
							<div className="hero__search">
								<div className="hero__search__form">
									<form action="#">
										<div className="hero__search__categories">
											All Categories
											<span className="arrow_carrot-down" />
										</div>
										<input type="text" placeholder="What do yo u need?" />
										<button type="submit" className="site-btn">
											SEARCH
										</button>
									</form>
								</div>
								<div className="hero__search__phone">
									<div className="hero__search__phone__icon">
										<i className="fa fa-phone" />
									</div>
									<div className="hero__search__phone__text">
										<h5>+65 11.188.888</h5>
										<span>support 24/7 time</span>
									</div>
								</div>
							</div>
							{isMenu && (
								<div
									className="hero__item set-bg"
									style={{
										backgroundImage: 'url(/img/hero/banner.jpg)'
									}}
								>
									<div className="hero__text">
										<span>FRUIT FRESH</span>
										<h2>
											Vegetable <br />
											100% Organic
										</h2>
										<p>Free Pickup and Delivery Available</p>

										<a href="#!" className="primary-btn">
											SHOP NOW
										</a>
									</div>
								</div>
							)}
						</div>
					</div>
				</div>
			</section>
			{children}
			<footer className="footer spad">
				<div className="container">
					<div className="row">
						<div className="col-lg-3 col-md-6 col-sm-6">
							<div className="footer__about">
								<div className="footer__about__logo">
									<a href="./index.html">
										<img src="img/logo.png" alt="" />
									</a>
								</div>
								<ul>
									<li>Address: 60-49 Road 11378 New York</li>
									<li>Phone: +65 11.188.888</li>
									<li>Email: hello@colorlib.com</li>
								</ul>
							</div>
						</div>
						<div className="col-lg-4 col-md-6 col-sm-6 offset-lg-1">
							<div className="footer__widget">
								<h6>Useful Links</h6>
								<ul>
									<li>
										<a href="#!">About Us</a>
									</li>
									<li>
										<a href="#!">About Our Shop</a>
									</li>
									<li>
										<a href="#!">Secure Shopping</a>
									</li>
									<li>
										<a href="#!">Delivery infomation</a>
									</li>
									<li>
										<a href="#!">Privacy Policy</a>
									</li>
									<li>
										<a href="#!">Our Sitemap</a>
									</li>
								</ul>
								<ul>
									<li>
										<a href="#!">Who We Are</a>
									</li>
									<li>
										<a href="#!">Our Services</a>
									</li>
									<li>
										<a href="#!">Projects</a>
									</li>
									<li>
										<a href="#!">Contact</a>
									</li>
									<li>
										<a href="#!">Innovation</a>
									</li>
									<li>
										<a href="#!">Testimonials</a>
									</li>
								</ul>
							</div>
						</div>
						<div className="col-lg-4 col-md-12">
							<div className="footer__widget">
								<h6>Join Our Newsletter Now</h6>
								<p>Get E-mail updates about our latest shop and special offers.</p>
								<form action="#">
									<input type="text" placeholder="Enter your mail" />
									<button type="submit" className="site-btn">
										Subscribe
									</button>
								</form>
								<div className="footer__widget__social">
									<a href="#!">
										<i className="fa fa-facebook" />
									</a>
									<a href="#!">
										<i className="fa fa-instagram" />
									</a>
									<a href="#!">
										<i className="fa fa-twitter" />
									</a>
									<a href="#!">
										<i className="fa fa-pinterest" />
									</a>
								</div>
							</div>
						</div>
					</div>
					<div className="row">
						<div className="col-lg-12">
							<div className="footer__copyright">
								<div className="footer__copyright__text">
									<p>
										{/* Link back to Colorlib can't be removed. Template is licensed under CC BY 3.0. */}
										Copyright © All rights reserved | This template is made with{' '}
										<i className="fa fa-heart" aria-hidden="true" /> by <a href="https://colorlib.com">Colorlib</a>
										{/* Link back to Colorlib can't be removed. Template is licensed under CC BY 3.0. */}
									</p>
								</div>
								<div className="footer__copyright__payment">
									<img src="img/payment-item.png" alt="" />
								</div>
							</div>
						</div>
					</div>
				</div>
			</footer>
		</>
	);
};

export default Layout;
