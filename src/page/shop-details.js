import React, { useEffect } from 'react';
import { Link, useParams } from 'react-router-dom';
import Layout from './Layout';
import { useDispatch, useSelector } from 'react-redux';
import { sanphamRequestedAction } from 'redux/actions/sanphamAction';
import { ctsanphamRequestedAction } from 'redux/actions/sanphamAction';
import { giohangRequestedAction, themgiohangRequestedAction } from 'redux/actions/giohangAction';
const Shopdetails = () => {
	const dispatch = useDispatch();
	const dsSanPham = useSelector((state) => state.san_pham.ds_san_pham);
	const ctSanPham = useSelector((state) => state.san_pham.ct_san_pham);
	let { id } = useParams();

	const addToCart = (gia, id) => {
		/* e.preventDefault(); */
		const gio_hang = {
			id_sp: id,
			so_luong: 1,
			gia: gia
		};
		dispatch(themgiohangRequestedAction(gio_hang));
		dispatch(giohangRequestedAction());
	};

	useEffect(() => {
		dispatch(ctsanphamRequestedAction(id));
		dispatch(sanphamRequestedAction());
	}, [dispatch, id]);

	return (
		<Layout>
			<section
				className="breadcrumb-section set-bg"
				data-setbg="img/breadcrumb.jpg"
				style={{ backgroundImage: 'url(/img/breadcrumb.jpg)' }}
			>
				<div className="container">
					<div className="row">
						<div className="col-lg-12 text-center">
							<div className="breadcrumb__text">
								<h2>Vegetable’s Package</h2>
								<div className="breadcrumb__option">
									<Link to="/">Home</Link>
									<Link to="/">Vegetables</Link>
									<span>Vegetable’s Package</span>
								</div>
							</div>
						</div>
					</div>
				</div>
			</section>
			<section className="product-details spad">
				<div className="container">
					<div className="row">
						<div className="col-lg-6 col-md-6">
							<div className="product__details__pic">
								<div className="product__details__pic__item">
									<img className="product__details__pic__item--large" src={`${ctSanPham.san_pham.hinh}`} alt="" />
								</div>
								<div className="product__details__pic__slider owl-carousel">
									<img
										data-imgbigurl="img/product/details/product-details-2.jpg"
										src="img/product/details/thumb-1.jpg"
										alt=""
									/>
									<img
										data-imgbigurl="img/product/details/product-details-3.jpg"
										src="img/product/details/thumb-2.jpg"
										alt=""
									/>
									<img
										data-imgbigurl="img/product/details/product-details-5.jpg"
										src="img/product/details/thumb-3.jpg"
										alt=""
									/>
									<img
										data-imgbigurl="img/product/details/product-details-4.jpg"
										src="img/product/details/thumb-4.jpg"
										alt=""
									/>
								</div>
							</div>
						</div>
						<div className="col-lg-6 col-md-6">
							<div className="product__details__text">
								<h3>{ctSanPham.san_pham.tensp}</h3>
								<div className="product__details__rating">
									<i className="fa fa-star" />
									<i className="fa fa-star" />
									<i className="fa fa-star" />
									<i className="fa fa-star" />
									<i className="fa fa-star-half-o" />
									<span>(18 reviews)</span>
								</div>
								<div className="product__details__price">{ctSanPham.san_pham.gia}</div>
								<p>{ctSanPham.san_pham.chitiet}</p>
								<div className="product__details__quantity">
									<div className="quantity">
										<div className="pro-qty">
											<input type="text" defaultValue={1} />
										</div>
									</div>
								</div>
								<a
									href="#!"
									onClick={() => addToCart(ctSanPham.san_pham.gia, ctSanPham.san_pham.id)}
									className="primary-btn"
								>
									ADD TO CARD
								</a>

								<a href="#!" className="heart-icon">
									<span className="icon_heart_alt" />
								</a>
								<ul>
									<li>
										<b>Availability</b> <span>In Stock</span>
									</li>
									<li>
										<b>Shipping</b>{' '}
										<span>
											01 day shipping. <samp>Free pickup today</samp>
										</span>
									</li>
									<li>
										<b>Weight</b> <span>0.5 kg</span>
									</li>
									<li>
										<b>Share on</b>
										<div className="share">
											<a href="#!">
												<i className="fa fa-facebook" />
											</a>
											<a href="#!">
												<i className="fa fa-twitter" />
											</a>
											<a href="#!">
												<i className="fa fa-instagram" />
											</a>
											<a href="#!">
												<i className="fa fa-pinterest" />
											</a>
										</div>
									</li>
								</ul>
							</div>
						</div>
						<div className="col-lg-12">
							<div className="product__details__tab">
								<ul className="nav nav-tabs" role="tablist">
									<li className="nav-item">
										<a className="nav-link active" data-toggle="tab" href="#tabs-1" role="tab" aria-selected="true">
											Description
										</a>
									</li>
									<li className="nav-item">
										<a className="nav-link" data-toggle="tab" href="#tabs-2" role="tab" aria-selected="false">
											Information
										</a>
									</li>
									<li className="nav-item">
										<a className="nav-link" data-toggle="tab" href="#tabs-3" role="tab" aria-selected="false">
											Reviews <span>(1)</span>
										</a>
									</li>
								</ul>
								<div className="tab-content">
									<div className="tab-pane active" id="tabs-1" role="tabpanel">
										<div className="product__details__tab__desc">
											<h6>Products Infomation</h6>
											<p>
												Vestibulum ac diam sit amet quam vehicula elementum sed sit amet dui. Pellentesque in ipsum id
												orci porta dapibus. Proin eget tortor risus. Vivamus suscipit tortor eget felis porttitor
												volutpat. Vestibulum ac diam sit amet quam vehicula elementum sed sit amet dui. Donec rutrum
												congue leo eget malesuada. Vivamus suscipit tortor eget felis porttitor volutpat. Curabitur arcu
												erat, accumsan id imperdiet et, porttitor at sem. Praesent sapien massa, convallis a
												pellentesque nec, egestas non nisi. Vestibulum ac diam sit amet quam vehicula elementum sed sit
												amet dui. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia
												Curae; Donec velit neque, auctor sit amet aliquam vel, ullamcorper sit amet ligula. Proin eget
												tortor risus.
											</p>
											<p>
												Praesent sapien massa, convallis a pellentesque nec, egestas non nisi. Lorem ipsum dolor sit
												amet, consectetur adipiscing elit. Mauris blandit aliquet elit, eget tincidunt nibh pulvinar a.
												Cras ultricies ligula sed magna dictum porta. Cras ultricies ligula sed magna dictum porta. Sed
												porttitor lectus nibh. Mauris blandit aliquet elit, eget tincidunt nibh pulvinar a. Vestibulum
												ac diam sit amet quam vehicula elementum sed sit amet dui. Sed porttitor lectus nibh. Vestibulum
												ac diam sit amet quam vehicula elementum sed sit amet dui. Proin eget tortor risus.
											</p>
										</div>
									</div>
									<div className="tab-pane" id="tabs-2" role="tabpanel">
										<div className="product__details__tab__desc">
											<h6>Products Infomation</h6>
											<p>
												Vestibulum ac diam sit amet quam vehicula elementum sed sit amet dui. Pellentesque in ipsum id
												orci porta dapibus. Proin eget tortor risus. Vivamus suscipit tortor eget felis porttitor
												volutpat. Vestibulum ac diam sit amet quam vehicula elementum sed sit amet dui. Donec rutrum
												congue leo eget malesuada. Vivamus suscipit tortor eget felis porttitor volutpat. Curabitur arcu
												erat, accumsan id imperdiet et, porttitor at sem. Praesent sapien massa, convallis a
												pellentesque nec, egestas non nisi. Vestibulum ac diam sit amet quam vehicula elementum sed sit
												amet dui. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia
												Curae; Donec velit neque, auctor sit amet aliquam vel, ullamcorper sit amet ligula. Proin eget
												tortor risus.
											</p>
											<p>
												Praesent sapien massa, convallis a pellentesque nec, egestas non nisi. Lorem ipsum dolor sit
												amet, consectetur adipiscing elit. Mauris blandit aliquet elit, eget tincidunt nibh pulvinar a.
												Cras ultricies ligula sed magna dictum porta. Cras ultricies ligula sed magna dictum porta. Sed
												porttitor lectus nibh. Mauris blandit aliquet elit, eget tincidunt nibh pulvinar a.
											</p>
										</div>
									</div>
									<div className="tab-pane" id="tabs-3" role="tabpanel">
										<div className="product__details__tab__desc">
											<h6>Products Infomation</h6>
											<p>
												Vestibulum ac diam sit amet quam vehicula elementum sed sit amet dui. Pellentesque in ipsum id
												orci porta dapibus. Proin eget tortor risus. Vivamus suscipit tortor eget felis porttitor
												volutpat. Vestibulum ac diam sit amet quam vehicula elementum sed sit amet dui. Donec rutrum
												congue leo eget malesuada. Vivamus suscipit tortor eget felis porttitor volutpat. Curabitur arcu
												erat, accumsan id imperdiet et, porttitor at sem. Praesent sapien massa, convallis a
												pellentesque nec, egestas non nisi. Vestibulum ac diam sit amet quam vehicula elementum sed sit
												amet dui. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia
												Curae; Donec velit neque, auctor sit amet aliquam vel, ullamcorper sit amet ligula. Proin eget
												tortor risus.
											</p>
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</section>
			<section className="related-product">
				<div className="container">
					<div className="row">
						<div className="col-lg-12">
							<div className="section-title related__product__title">
								<h2>Related Product</h2>
							</div>
						</div>
					</div>

					<div className="row">
						{dsSanPham.san_pham.map((sp) => (
							<div className="col-lg-3 col-md-4 col-sm-6" key={sp.id}>
								<div className="product__item">
									<div
										className="product__item__pic set-bg"
										data-setbg="img/product/product-1.jpg"
										style={{
											backgroundImage: `url(${sp.hinh})`
										}}
									>
										<ul className="product__item__pic__hover">
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
												<a href="#!">
													<i className="fa fa-shopping-cart" />
												</a>
											</li>
										</ul>
									</div>
									<div className="product__item__text">
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
		</Layout>
	);
};

export default Shopdetails;
