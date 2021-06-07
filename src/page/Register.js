import React from 'react';
import Layout from 'page/Layout';
import { dangkyRequestedAction } from 'redux/actions/authAction';
import { useDispatch, useSelector } from 'react-redux';
import { Formik } from 'formik';
import * as Yup from 'yup';
import classNames from 'classnames';

const Register = () => {
	const dispatch = useDispatch();
	const register = useSelector((state) => state.auth.register);

	const initialValues = {
		ho_ten: '',
		user_name: '',
		email: '',
		password: '',
		password_confirm: '',
		sdt: '',
		dia_chi: ''
	};
	const validationSchema = Yup.object().shape({
		ho_ten: Yup.string()
			.min(3, 'Ho ten must be at least 3 characters')
			.max(16, 'Ho ten must be at most 16 characters')
			.required('Ho ten is required'),
		user_name: Yup.string()
			.min(6, 'Tai khoan must be at least 6 characters')
			.max(16, 'Tai khoan must be at most 16 characters')
			.matches(/^(?![_.])(?!.*[_.]{2})[a-zA-Z0-9._]+(?<![_.])$/, 'Tai khoan invalid')
			.required('Tai khoan is required'),
		email: Yup.string()
			.matches(
				/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
				'Email invalid'
			)
			.required('Email is required'),
		password: Yup.string().required('Mat khau is required'),
		password_confirm: Yup.string()
			.required('Comfirm mat khau is required')
			.oneOf([Yup.ref('password')], 'Mat khau is not match'),
		sdt: Yup.string()
			.min(10, 'Sdt must be at least 10 characters')
			.matches(/^[0-9]+$/, 'Sdt invalid')
			.nullable(),
		dia_chi: Yup.string()
			.min(6, 'Dia chi must be at least 6 characters')
			.max(66, 'Dia chi must be at most 66 characters')
			.nullable()
	});

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
		dispatch(dangkyRequestedAction(user));
	};

	return (
		<Layout>
			<div className="container">
				<div className="row">
					<div className="col-lg-8 col-md-10 mx-auto">
						<h1 className="text-center" style={{ color: 'blue' }}>
							Đăng Ký
						</h1>
						<Formik initialValues={initialValues} validationSchema={validationSchema} onSubmit={onSubmit}>
							{(props) => (
								<form onSubmit={props.handleSubmit}>
									<div className="control-group">
										<div className="form-group floating-label-form-group controls">
											<label>Ho Va Ten</label>
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
									</div>
									<div className="control-group">
										<div className="form-group floating-label-form-group controls">
											<label>Tai khoan</label>
											<input
												type="text"
												className={classNames('form-control', {
													'is-invalid':
														(props.touched.user_name && props.errors.user_name) || register.errors?.user_name
												})}
												placeholder="Tai khoan"
												id="user_name"
												name="user_name"
												onChange={props.handleChange}
												onBlur={props.handleBlur}
												value={props.values.user_name}
											/>
											{props.touched.user_name && props.errors.user_name && (
												<div id="invalid-feedback">{props.errors.user_name}</div>
											)}
											{register.errors?.user_name && (
												<div className="invalid-feedback">{register.errors?.user_name}</div>
											)}
										</div>
									</div>
									<div className="control-group">
										<div className="form-group floating-label-form-group controls">
											<label>Mật khẩu</label>
											<input
												type="password"
												className={classNames('form-control', {
													'is-invalid': props.touched.password && props.errors.password
												})}
												placeholder="Mat khau"
												id="password"
												name="password"
												onChange={props.handleChange}
												onBlur={props.handleBlur}
												value={props.values.password}
											/>
											{props.touched.password && props.errors.password && (
												<div id="invalid-feedback">{props.errors.password}</div>
											)}
										</div>
									</div>
									<div className="control-group">
										<div className="form-group floating-label-form-group controls">
											<label>Nhập lại mật khẩu</label>
											<input
												type="password"
												className={classNames('form-control', {
													'is-invalid': props.touched.password_confirm && props.errors.password_confirm
												})}
												placeholder="Nhap lai mk"
												id="password_confirm"
												name="password_confirm"
												onChange={props.handleChange}
												onBlur={props.handleBlur}
												value={props.values.password_confirm}
											/>
											{props.touched.password_confirm && props.errors.password_confirm && (
												<div id="invalid-feedback">{props.errors.password_confirm}</div>
											)}
										</div>
									</div>
									<div className="control-group">
										<div className="form-group floating-label-form-group controls">
											<label>Email</label>
											<input
												type="text"
												className={classNames('form-control', {
													'is-invalid': (props.touched.email && props.errors.email) || register.errors?.email
												})}
												placeholder="Email"
												id="email"
												name="email"
												onChange={props.handleChange}
												onBlur={props.handleBlur}
												value={props.values.email}
											/>
											{props.touched.email && props.errors.email && (
												<div id="invalid-feedback">{props.errors.email}</div>
											)}
											{register.errors?.email && <div className="invalid-feedback">{register.errors?.email}</div>}
										</div>
									</div>
									<div className="control-group">
										<div className="form-group floating-label-form-group controls">
											<label>Địa chỉ</label>
											<input
												type="text"
												className={classNames('form-control', {
													'is-invalid': props.touched.dia_chi && props.errors.dia_chi
												})}
												placeholder="Dia chi"
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
									</div>
									<div className="control-group">
										<div className="form-group floating-label-form-group controls">
											<label>Sdt</label>
											<input
												type="text"
												className={classNames('form-control', {
													'is-invalid': props.touched.sdt && props.errors.sdt
												})}
												placeholder="So dien thoai"
												id="sdt"
												name="sdt"
												onChange={props.handleChange}
												onBlur={props.handleBlur}
												value={props.values.sdt}
											/>
											{props.touched.sdt && props.errors.sdt && <div id="invalid-feedback">{props.errors.sdt}</div>}
										</div>
									</div>
									<br />
									{register.is_loading ? (
										<button type="submit" className="btn btn-primary" disabled>
											<span className="spinner-grow spinner-grow-sm mr-1" role="status" aria-hidden="true" />
											Register
										</button>
									) : (
										<button type="submit" className="btn btn-primary">
											Register
										</button>
									)}
								</form>
							)}
						</Formik>
					</div>
				</div>
			</div>
		</Layout>
	);
};
export default Register;
