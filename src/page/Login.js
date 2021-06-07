import Layout from './Layout';
import React from 'react';
import { Link } from 'react-router-dom';
import { dangnhapRequestedAction } from 'redux/actions/authAction';
import { useDispatch, useSelector } from 'react-redux';
import { Formik } from 'formik';
import classNames from 'classnames';
import * as Yup from 'yup';

const Login = () => {
	const dispatch = useDispatch();
	const login = useSelector((state) => state.auth.login);

	const initialValues = {
		user_name: '',
		password: ''
	};
	const validationSchema = Yup.object({
		user_name: Yup.string().required('User name is required'),
		password: Yup.string().required('Password is required')
	});
	const onSubmit = (values) => {
		const user = {
			user_name: values.user_name,
			password: values.password
		};
		console.log(user);
		dispatch(dangnhapRequestedAction(user));
	};

	return (
		<Layout>
			<div className="container">
				<div className="row">
					<div className="col-lg-8 col-md-10 mx-auto">
						<h1 className="text-center" style={{ color: 'blue' }}>
							Login
						</h1>
						<Formik initialValues={initialValues} validationSchema={validationSchema} onSubmit={onSubmit}>
							{(props) => (
								<form onSubmit={props.handleSubmit}>
									<div className="control-group">
										<div className="form-group floating-label-form-group controls">
											<label>Tài khoản</label>
											<input
												type="text"
												className={classNames('form-control', {
													'is-invalid': (props.touched.user_name && props.errors.user_name) || login.errors?.user
												})}
												placeholder="Tai khoan"
												id="user_name"
												name="user_name"
												onChange={props.handleChange}
												onBlur={props.handleBlur}
												value={props.values.user_name}
											/>
											{props.touched.user_name && props.errors.user_name && (
												<div className="invalid-feedback">{props.errors.user_name}</div>
											)}
											{login.errors?.user && <div className="invalid-feedback">{login.errors?.user}</div>}
										</div>
									</div>
									<div className="control-group">
										<div className="form-group floating-label-form-group controls">
											<label>Mật khẩu</label>
											<input
												type="password"
												className={classNames('form-control', {
													'is-invalid': (props.touched.password && props.errors.password) || login.errors?.user
												})}
												placeholder="Mat khau"
												id="password"
												name="password"
												onChange={props.handleChange}
												onBlur={props.handleBlur}
												value={props.values.password}
											/>
											{props.touched.password && props.errors.password && (
												<div className="invalid-feedback">{props.errors.password}</div>
											)}
											{login.errors?.user && <div className="invalid-feedback">{login.errors?.user}</div>}
										</div>
									</div>
									{login.is_loading ? (
										<button type="submit" className="btn btn-primary" disabled>
											<span className="spinner-grow spinner-grow-sm mr-1" role="status" aria-hidden="true" />
											Login
										</button>
									) : (
										<button type="submit" className="btn btn-primary">
											Login
										</button>
									)}
									<div className="header__top__right__auth ml-3">
										<Link className="btn-dk" to="/Register">
											<i className="fa fa-user" /> Resgister
										</Link>
									</div>
								</form>
							)}
						</Formik>
					</div>
				</div>
			</div>
		</Layout>
	);
};
export default Login;
