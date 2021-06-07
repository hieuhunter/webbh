import React, { useEffect } from 'react';
import Layout from 'page/Layout';
import { useDispatch, useSelector } from 'react-redux';
import { thongtinRequestedAction } from 'redux/actions/thongtinAction';

const Thongtin = () => {
	const dispatch = useDispatch();
	const thongtin = useSelector((state) => state.thong_tin.thongtin);

	useEffect(() => {
		dispatch(thongtinRequestedAction());
	}, [dispatch]);

	return (
		<Layout>
			<div className="container bootstrap snippets bootdey">
				<div className="row">
					<div className="profile-nav col-md-3">
						<div className="panel">
							<div className="user-heading round">
								<a href="#!">
									<img src="https://bootdey.com/img/Content/avatar/avatar3.png" alt="" />
								</a>
								<h1>{thongtin.tt.ho_ten}</h1>
								<p>{thongtin.tt.email}</p>
							</div>
							<ul className="nav nav-pills nav-stacked">
								<li>
									<a href="#!">
										{' '}
										<i className="fa fa-edit" /> Edit profile
									</a>
								</li>
							</ul>
						</div>
					</div>
					<div className="profile-info col-md-9">
						<div className="panel">
							<form>
								<textarea
									placeholder="Whats in your mind today?"
									rows={2}
									className="form-control input-lg p-text-area"
									defaultValue={''}
								/>
							</form>
							<footer className="panel-footer">
								<button className="btn btn-warning pull-right">Post</button>
								<ul className="nav nav-pills">
									<li>
										<a href="#!">
											<i className="fa fa-map-marker" style={{ marginLeft: '10px' }} />
										</a>
									</li>
									<li>
										<a href="#!">
											<i className="fa fa-camera" style={{ marginLeft: '10px' }} />
										</a>
									</li>
									<li>
										<a href="#!">
											<i className=" fa fa-film" style={{ marginLeft: '10px' }} />
										</a>
									</li>
									<li>
										<a href="#!">
											<i className="fa fa-microphone" style={{ marginLeft: '10px' }} />
										</a>
									</li>
								</ul>
							</footer>
						</div>
						<div className="panel">
							<div className="bio-graph-heading">
								Aliquam ac magna metus. Nam sed arcu non tellus fringilla fringilla ut vel ispum. Aliquam ac magna
								metus.
							</div>
							<div className="panel-body bio-graph-info">
								<h1>Bio Graph</h1>
								<div className="row">
									<div className="bio-row">
										<p>
											<span>First Name </span>
											{thongtin.tt.ho_ten}
										</p>
									</div>
									<div className="bio-row">
										<p>
											<span>số điện thoai: </span>
											{thongtin.tt.sdt}
										</p>
									</div>
									<div className="bio-row">
										<p>
											<span>email: </span>
											{thongtin.tt.email}
										</p>
									</div>
									<div className="bio-row">
										<p>
											<span>Địa chỉ</span>
											{thongtin.tt.dia_chi}
										</p>
									</div>
									<div className="bio-row">
										<p>
											<span>Occupation </span>: UI Designer
										</p>
									</div>
									<div className="bio-row">
										<p>
											<span>Email </span>: jsmith@flatlab.com
										</p>
									</div>
									<div className="bio-row">
										<p>
											<span>Mobile </span>: (12) 03 4567890
										</p>
									</div>
									<div className="bio-row">
										<p>
											<span>Phone </span>: 88 (02) 123456
										</p>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</Layout>
	);
};
export default Thongtin;
