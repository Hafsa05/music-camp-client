import React from 'react';
import { useContext } from 'react';
import { FaGoogle } from "react-icons/fa";
import { useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from '../../pages/providers/AuthProvider';
import Swal from 'sweetalert2';

const GoogleLogin = () => {
	const { googleSignIn } = useContext(AuthContext);

	const navigate = useNavigate();
	const location = useLocation();

	const from = location.state?.from.pathname || '/';

	const handleGoogleSignIn = () => {
		googleSignIn()
			.then((result) => {
				const loggedInUser = result.user;
				console.log(loggedInUser);
				// navigate(from, { replace: true });

				const saveUser = { name: loggedInUser.displayName, email: loggedInUser.email }

				fetch('https://music-camp-server.vercel.app/users', {
					method: 'POST',
					headers: {
						'content-type': 'application/json'
					},
					body: JSON.stringify(saveUser)
				})
					.then((res) => res.json())
					.then(() => {
						Swal.fire({
							position: 'top-end',
							icon: 'success',
							title: 'Login Successfully',
							showConfirmButton: false,
							timer: 1500
						});
						navigate(from, { replace: true });
					})
					.catch(error => console.log(error))
			})
	}
	return (
		<>
			<div className="divider">Or user google</div>
			<div className="w-full text-center m-4">
				<button onClick={handleGoogleSignIn} className="btn btn-circle btn-outline">
					<FaGoogle></FaGoogle>
				</button>
			</div>
		</>

	);
};

export default GoogleLogin;