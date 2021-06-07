import React, { useEffect } from 'react';
import Layout from 'page/Layout';
import { sanphamRequestedAction } from 'redux/actions/sanphamAction';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { giohangRequestedAction, themgiohangRequestedAction } from 'redux/actions/giohangAction';

const Home = () => {
	const dispatch = useDispatch();
	const dsSanPham = useSelector((state) => state.san_pham.ds_san_pham);
	//const addGiohang = useSelector((state) => state.them_giohang.ghang);

	useEffect(() => {
		dispatch(sanphamRequestedAction());
	}, [dispatch]);

	const addToCart = (id, gia) => {
		const gio_hang = {
			id_sp: id,
			so_luong: 1,
			gia: gia
		};
		dispatch(themgiohangRequestedAction(gio_hang));
		dispatch(giohangRequestedAction());
	};

	return (
		<Layout isMenu={true}>
			<section className="featured spad pt-0">
				<div className="container">
					<div className="row">
						<div className="col-lg-12">
							<div className="section-title">
								<h2>Featured Product</h2>
							</div>
							<div className="featured__controls">
								<ul>
									<li className="active" data-filter="*">
										All
									</li>
									<li data-filter=".oranges">Oranges</li>
									<li data-filter=".fresh-meat">Fresh Meat</li>
									<li data-filter=".vegetables">Vegetables</li>
									<li data-filter=".fastfood">Fastfood</li>
								</ul>
							</div>
						</div>
					</div>

					<div className="row featured__filter">
						{dsSanPham.san_pham.map((sp) => (
							<div className="col-lg-3 col-md-4 col-sm-6 mix oranges fresh-meat" key={sp.id}>
								<div className="featured__item">
									<div
										className="featured__item__pic set-bg"
										data-setbg="img/featured/feature-1.jpg"
										style={{
											backgroundImage: `url(${sp.hinh})`
										}}
									>
										<ul className="featured__item__pic__hover">
											<li>
												<a href="#!">
													<i className="fa fa-heart" />
												</a>
											</li>
											<li>
												<a href="#!">
													<i className="fa fa-retweet" />
												</a>
											</li>
											<li>
												<a href="#!" onClick={addToCart.bind(this, sp.id, sp.gia)}>
													<i className="fa fa-shopping-cart" />
												</a>
											</li>
										</ul>
									</div>
									<div className="featured__item__text">
										<h6>
											<Link to={`/shop-details/${sp.id}`}>{sp.tensp}</Link>
										</h6>
										<h5>{sp.gia}</h5>
									</div>
								</div>
							</div>
						))}
					</div>
				</div>
			</section>
			<div className="banner">
				<div className="container">
					<div className="row">
						<div className="col-lg-6 col-md-6 col-sm-6">
							<div className="banner__pic">
								<img src="img/banner/banner-1.jpg" alt="" />
							</div>
						</div>
						<div className="col-lg-6 col-md-6 col-sm-6">
							<div className="banner__pic">
								<img src="img/banner/banner-2.jpg" alt="" />
							</div>
						</div>
					</div>
				</div>
			</div>
			<section className="latest-product spad">
				<div className="container">
					<div className="row">
						<div className="col-lg-4 col-md-6">
							<div className="latest-product__text">
								<h4>New Products</h4>
								{dsSanPham.san_pham.map((sp) => (
									<div className="latest-product__slider owl-carousel" key={sp.id}>
										<div className="latest-prdouct__slider__item">
											<a href="#!" className="latest-product__item">
												<div className="latest-product__item__pic">
													<img src={`${sp.hinh}`} alt="" />
												</div>
												<div className="latest-product__item__text">
													<h6>
														<Link to={`/shop-details/${sp.id}`}>{sp.tensp}</Link>
													</h6>
													<span>{sp.gia}</span>
												</div>
											</a>
										</div>
									</div>
								))}
							</div>
						</div>
						<div className="col-lg-4 col-md-6">
							<div className="latest-product__text">
								<h4>New Products</h4>
								{dsSanPham.san_pham.map((sp) => (
									<div className="latest-product__slider owl-carousel" key={sp.id}>
										<div className="latest-prdouct__slider__item">
											<a href="#!" className="latest-product__item">
												<div className="latest-product__item__pic">
													<img src={`${sp.hinh}`} alt="" />
												</div>
												<div className="latest-product__item__text">
													<h6>
														<Link to={`/shop-details/${sp.id}`}>{sp.tensp}</Link>
													</h6>
													<span>{sp.gia}</span>
												</div>
											</a>
										</div>
									</div>
								))}
							</div>
						</div>

						<div className="col-lg-4 col-md-6">
							<div className="latest-product__text">
								<h4>New Products</h4>
								{dsSanPham.san_pham.map((sp) => (
									<div className="latest-product__slider owl-carousel" key={sp.id}>
										<div className="latest-prdouct__slider__item">
											<a href="#!" className="latest-product__item">
												<div className="latest-product__item__pic">
													<img src={`${sp.hinh}`} alt="" />
												</div>
												<div className="latest-product__item__text">
													<h6>
														<Link to={`/shop-details/${sp.id}`}>{sp.tensp}</Link>
													</h6>
													<span>{sp.gia}</span>
												</div>
											</a>
										</div>
									</div>
								))}
							</div>
						</div>
					</div>
				</div>
			</section>

			<section className="from-blog spad">
				<div className="container">
					<div className="row">
						<div className="col-lg-12">
							<div className="section-title from-blog__title">
								<h2>From The Blog</h2>
							</div>
						</div>
					</div>
					<div className="row">
						<div className="col-lg-4 col-md-4 col-sm-6">
							<div className="blog__item">
								<div className="blog__item__pic">
									<img src="img/blog/blog-1.jpg" alt="" />
								</div>
								<div className="blog__item__text">
									<ul>
										<li>
											<i className="fa fa-calendar-o" /> May 4,2019
										</li>
										<li>
											<i className="fa fa-comment-o" /> 5
										</li>
									</ul>
									<h5>
										<a href="#!">Cooking tips make cooking simple</a>
									</h5>
									<p>Sed quia non numquam modi tempora indunt ut labore et dolore magnam aliquam quaerat </p>
								</div>
							</div>
						</div>
						<div className="col-lg-4 col-md-4 col-sm-6">
							<div className="blog__item">
								<div className="blog__item__pic">
									<img src="img/blog/blog-2.jpg" alt="" />
								</div>
								<div className="blog__item__text">
									<ul>
										<li>
											<i className="fa fa-calendar-o" /> May 4,2019
										</li>
										<li>
											<i className="fa fa-comment-o" /> 5
										</li>
									</ul>
									<h5>
										<a href="#!">6 ways to prepare breakfast for 30</a>
									</h5>
									<p>Sed quia non numquam modi tempora indunt ut labore et dolore magnam aliquam quaerat </p>
								</div>
							</div>
						</div>
						<div className="col-lg-4 col-md-4 col-sm-6">
							<div className="blog__item">
								<div className="blog__item__pic">
									<img src="img/blog/blog-3.jpg" alt="" />
								</div>
								<div className="blog__item__text">
									<ul>
										<li>
											<i className="fa fa-calendar-o" /> May 4,2019
										</li>
										<li>
											<i className="fa fa-comment-o" /> 5
										</li>
									</ul>
									<h5>
										<a href="#!">Visit the clean farm in the US</a>
									</h5>
									<p>Sed quia non numquam modi tempora indunt ut labore et dolore magnam aliquam quaerat </p>
								</div>
							</div>
						</div>
					</div>
				</div>
			</section>
		</Layout>
	);
};

export default Home;
