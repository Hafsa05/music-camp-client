import { useContext } from "react";
import { Navigate, useLocation } from "react-router-dom";
import { AuthContext } from "../pages/providers/AuthProvider";

const PrivateRoute = ({ children }) => {
	const { user, loading } = useContext(AuthContext);
	const location = useLocation();

	if (loading) {
		return <span className="text-sky-600 loading loading-bars loading-lg"></span>;
	}

	if (user) {
		return children;
	}
	return <Navigate to='/login' state={{ from: location }}></Navigate>
};

export default PrivateRoute;