import React, { useEffect } from 'react';
import { Link, useParams } from 'react-router-dom';
import Layout from './Layout';
import { useDispatch, useSelector } from 'react-redux';
import { sanphamtheodmRequestedAction } from 'redux/actions/sanphamtheodm';
const Shopgird = () => {
	const dispatch = useDispatch();
	const sanphamtheodm = useSelector((state) => state.ds_dm.sptheo_dm.san_pham);
	let { id } = useParams();

	useEffect(() => {
		dispatch(sanphamtheodmRequestedAction(id));
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
								<h2>Organi Shop</h2>
								<div className="breadcrumb__option">
									<Link to="/">Home</Link>
									<span>Shop</span>
								</div>
							</div>
						</div>
					</div>
				</div>
			</section>

			<section className="product spad">
				<div className="container">
					<div className="row">
						<div className="col-lg-3 col-md-5">
							<div className="sidebar">
								<div className="sidebar__item">
									<h4>Popular Size</h4>
									<div className="sidebar__item__size">
										<label htmlFor="large">
											Large
											<input type="radio" id="large" />
										</label>
									</div>
									<div className="sidebar__item__size">
										<label htmlFor="medium">
											Medium
											<input type="radio" id="medium" />
										</label>
									</div>
									<div className="sidebar__item__size">
										<label htmlFor="small">
											Small
											<input type="radio" id="small" />
										</label>
									</div>
									<div className="sidebar__item__size">
										<label htmlFor="tiny">
											Tiny
											<input type="radio" id="tiny" />
										</label>
									</div>
								</div>
								<div className="sidebar__item">
									<div className="latest-product__text">
										<h4>Latest Products</h4>
										{sanphamtheodm.map((sp) => (
											<div className="latest-product__slider owl-carousel" key={sp.id}>
												<div className="latest-prdouct__slider__item">
													<a href="#!" className="latest-product__item">
														<div className="latest-product__item__pic">
															<img src={`${sp.hinh}`} alt="" />
														</div>
														<div className="latest-product__item__text">
															<h6>{sp.tensp}</h6>
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
						<div className="col-lg-9 col-md-7">
							<div className="product__discount">
								<div className="filter__item">
									<div className="row">
										<div className="col-lg-4 col-md-5">
											<div className="filter__sort">
												<select>
													<option value={0}>Default</option>
													<option value={0}>Default</option>
												</select>
											</div>
										</div>
										<div className="col-lg-4 col-md-4">
											<div className="filter__found">
												<h6>
													<span>so luong :</span>
													{sanphamtheodm.leght}
												</h6>
											</div>
										</div>
										<div className="col-lg-4 col-md-3">
											<div className="filter__option">
												<span className="icon_grid-2x2" />
												<span className="icon_ul" />
											</div>
										</div>
									</div>
								</div>

								<div className="row">
									{sanphamtheodm.map((sp) => (
										<div className="col-lg-4 col-md-6 col-sm-6" key={sp.id}>
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
														<a href="!#">{sp.tensp}</a>
													</h6>
													<h5>"{sp.gia}</h5>
												</div>
											</div>
										</div>
									))}
								</div>
							</div>
							<div className="product__pagination">
								<a href="#!">1</a>
								<a href="#!">2</a>
								<a href="#!">3</a>
								<a href="!#">
									<i className="fa fa-long-arrow-right"></i>
								</a>
							</div>
						</div>
					</div>
				</div>
			</section>
		</Layout>
	);
};
export default Shopgird;
