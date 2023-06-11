import { Link, useLocation, useNavigate } from "react-router-dom";
import loginImg from '../../assets/images/undraw_Join_re_w1lh.png'
import { useForm } from "react-hook-form";
import { useState } from "react";
import { FiEye, FiEyeOff } from 'react-icons/fi';
import { AuthContext } from "../providers/AuthProvider";
import { useContext } from "react";
import Swal from "sweetalert2";
import GoogleLogin from "../../Components/SocialLogin/GoogleLogin";
import PageTitle from "../../Components/PageTitle/PageTitle";


const Login = () => {

	const { signIn } = useContext(AuthContext);
	const navigate = useNavigate();
	const location = useLocation();

	const from = location.state?.from.pathname || '/';

	const [showPassword, setShowPassword] = useState(false);
	const togglePasswordVisibility = () => {
		setShowPassword(!showPassword);
	};

	const { register, handleSubmit, reset, formState: { errors } } = useForm();
	const onSubmit = data => {
		signIn(data.email, data.password)
			.then(result => {
				const user = result.user;
				console.log(user);

				Swal.fire({
					position: 'top-end',
					icon: 'success',
					title: 'Successfully Login!',
					showConfirmButton: false,
					timer: 1500
				});

				navigate(from, { replace: true });
			})
	}

	return (
		<>
			<PageTitle pTitle={'Login'}></PageTitle>
			<div className="hero min-h-screen bg-base-200">
				<div className="hero-content flex-col md:flex-row">
					<div className="text-center md:w-1/2 lg:text-left">
						<h1 className="text-5xl font-bold p-4">Login now!</h1>
						<img src={loginImg} alt="" />

					</div>
					<div className="card md:w-1/2 max-w-sm shadow-2xl bg-base-100">
						<form onSubmit={handleSubmit(onSubmit)} className="card-body">
							<div className="form-control">
								<label className="label">
									<span className="label-text">Name</span>
								</label>
								<input type="text" {...register("name", { required: true })} name="name" placeholder="name" className="input input-bordered" />
								{errors.name && <span className="text-red-800">Name is required</span>}
							</div>

							<div className="form-control">
								<label className="label">
									<span className="label-text">Email</span>
								</label>
								<input type="email" {...register("email", { required: true })} name="email" placeholder="email" className="input input-bordered" />
								{errors.email && <span className="text-red-800">Email is required</span>}
							</div>

							<div className="form-control">
								<label className="label">
									<span className="label-text">Password</span>
								</label>
								<input type="password" {...register("password")} name="password" placeholder="password" className="input input-bordered" />
								{showPassword ? (<FiEyeOff type="password" onClick={togglePasswordVisibility} />) :
									(<FiEye type="text" onClick={togglePasswordVisibility} />)}

								<label className="label">
									<a href="#" className="label-text-alt link link-hover">Forgot password?</a>
								</label>
							</div>

							<div className="form-control mt-6">
								<input className="btn btn-primary bg-sky-500" type="submit" value='Login' />
							</div>
						</form>
						<GoogleLogin></GoogleLogin>
						<p className='text-center'><small>New user?? Please <Link to='/signup'><span className='text-sky-500'>Sign Up</span> </Link> </small></p>
					</div>
				</div>
			</div>
		</>
	);
};

export default Login;