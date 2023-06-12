import { Navigate, useLocation } from "react-router";
import { useContext } from "react";
import useStudent from "../hooks/useStudent/useStudent";
import { AuthContext } from "../pages/providers/AuthProvider";


const studentRoute = ({ children }) => {
	const { user, loading } = useContext(AuthContext);
	const [isStudent, isStudentLoading] = useStudent()
	const location = useLocation();

	if (loading || isStudentLoading) {
		return <span className="text-sky-600 loading loading-bars loading-lg"></span>;
	}

	if (user && isStudent) {
		return children;
	}
	return <Navigate to="/" state={{ from: location }} replace></Navigate>
};

export default studentRoute;