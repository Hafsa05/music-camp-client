import { Helmet } from "react-helmet";
import { Link, useLocation, useNavigate } from "react-router-dom";
import signUpImg from '../../assets/images/undraw_Certificate_re_yadi.png'
import { useForm } from "react-hook-form";
import { useContext } from "react";
import { AuthContext } from "../providers/AuthProvider";
import Swal from "sweetalert2";
import GoogleLogin from "../../Components/SocialLogin/GoogleLogin";
import PageTitle from "../../Components/PageTitle/PageTitle";
const SignUp = () => {

	const { register, handleSubmit, reset, formState: { errors }, watch } = useForm();
	const { createUser, updateUserProfile } = useContext(AuthContext);
	const navigate = useNavigate();
	const location = useLocation();

	const from = location.state?.from.pathname || '/';

	const onSubmit = data => {
		console.log(data);
		createUser(data.email, data.password)
			.then(result => {
				const loggedUser = result.user;
				console.log(loggedUser);
				navigate(from, { replace: true });

				updateUserProfile(data.name, data.photoURL)
					.then(() => {
						const saveUser = { name: data.name, email: data.email }
						fetch('http://localhost:5000/users', {
							method: 'POST',
							headers: {
								'content-type': 'application/json'
							},
							body: JSON.stringify(saveUser)
						})
							.then((res) => res.json())
							.then(data => {
								if (data.insertedId) {
									reset();
									Swal.fire({
										position: 'top-end',
										icon: 'success',
										title: 'User Created Successfully',
										showConfirmButton: false,
										timer: 1500
									});

									navigate('/');
								}
							})

					})

					.catch(error => console.log(error))

			})
	};

	// const password = watch('password');
	// const confirmPassword = watch('confirmPassword');

	return (
		<>
			<PageTitle pTitle={'Sign Up'}></PageTitle>

			<div className="hero min-h-screen bg-base-200">
				<div className="hero-content flex-col md:flex-row">
					<div className="text-center md:w-1/2 lg:text-left">
						<h1 className="text-5xl font-bold p-4">Sign Up now!</h1>
						<img src={signUpImg} alt="" className="rounded-xl" />
					</div>

					<div className="card md:w-1/2 max-w-sm shadow-2xl bg-base-100">
						<form onSubmit={handleSubmit(onSubmit)} className="card-body">
							<div className="form-control">
								<label className="label">
									<span className="label-text">Name</span>
								</label>
								<input type="text" {...register("name", { required: true })} name="name" placeholder="name" className="input input-bordered" />
								{errors.name && <p className="text-red-800">Name is required!</p>}
							</div>

							<div className="form-control">
								<label className="label">
									<span className="label-text">Photo URL</span>
								</label>
								<input type="text" {...register("photoURL", { required: true })} name="photoURL" placeholder="Photo URL" className="input input-bordered" />
								{errors.photoURL && <p className="text-red-800">Photo URL is required!</p>}
							</div>

							<div className="form-control">
								<label className="label">
									<span className="label-text">Gender</span>

								</label>
								<select className="input input-bordered" {...register("gender")}>
									<input type="text"
										{...register("gender", { required: true })} name="gender" placeholder="gender" />
									<option value="female">Female</option>
									<option value="male">Male</option>
									<option value="other">Other</option>
								</select>
								{errors.gender && <p className="text-red-800">Gender is required!</p>}
							</div>

							<div className="form-control">
								<label className="label">
									<span className="label-text">Phone Number</span>
								</label>
								<input type="text" {...register("phoneNumber", { required: true })} name="phoneNumber" placeholder="phone number" className="input input-bordered" />
								{errors.phoneNumber && <p className="text-red-800">Phone Number is required!</p>}
							</div>

							<div className="form-control">
								<label className="label">
									<span className="label-text">Email</span>
								</label>
								<input type="email" {...register("email", { required: true })} name="email" placeholder="email" className="input input-bordered" />
								{errors.email && <p className="text-red-800">Email is required!</p>}
							</div>

							<div className="form-control">
								<label className="label">
									<span className="label-text">Password</span>
								</label>
								<input type="password" {...register("password", {
									required: true,
									minLength: 6,
									maxLength: 25,
									pattern: /(?=.*[A-Z])(?=.*[a-z])(?=.*[0-9])(?=.*[!#$%&? "])/
								})} name="password" placeholder="password" className="input input-bordered" />
								{errors.password?.type === 'required' && <p className="text-red-800">Password is required!</p>}
								{errors.password?.type === 'minLength' && <p className="text-red-800">Password must be at least 6 characters!</p>}
								{errors.password?.type === 'maxLength' && <p className="text-red-800">Password must be less then 25 characters!</p>}
								{errors.password?.type === 'pattern' && <p className="text-red-800">Password must includes one uppercase, one lowercase, one number and one special character!</p>}

							</div>

							{/* <div className="form-control">
								<label className="label">
									<span className="label-text">Confirm Password</span>
								</label>
								<input type="password" {...register("confirmPassword", { required: true })} name="confirmPassword" placeholder="Confirm Password" className="input input-bordered" />
								{errors.confirmPassword === password && <p className="text-red-800">Password doesn't match!</p>}

							</div> */}

							<div className="form-control mt-6">
								<input className="btn btn-primary bg-sky-500" type="submit" value='Sign Up' />
							</div>

						</form>
						<GoogleLogin></GoogleLogin>
						<p className="text-center"><small>Already have an account? Please <span className="text-sky-500"><Link to='/login'>Login</Link> </span></small></p>
					</div>

				</div>

			</div>

		</>
	);
};

export default SignUp;