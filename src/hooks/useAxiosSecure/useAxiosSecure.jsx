import { useContext, useEffect } from 'react';
import axios from 'axios';
import { useLocation, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../pages/providers/AuthProvider';

const useAxiosSecure = () => {
	const { logOut } = useContext(AuthContext)
	
	const navigate = useNavigate();
	// const location = useLocation();
	// const from = location.state?.from.pathname || '/';

	const axiosSecure = axios.create({
		baseURL: 'http://localhost:5000',
	});

	useEffect(() => {
		axiosSecure.interceptors.request.use((configToken) => {
			const token = localStorage.getItem('access-token');
			if (token) {
				configToken.headers.Authorization = `bearer ${token}`;
			}
			return configToken;
		});

		axiosSecure.interceptors.response.use(
			(response) => response,
			async (error) => {
				if (error.response && (error.response.status === 401 || error.response.status === 403)) {
					await logOut();
					navigate('/login');
				}
				return Promise.reject(error);
			}
		);
	}, [axiosSecure, logOut, navigate]);

	return [axiosSecure];
};

export default useAxiosSecure;