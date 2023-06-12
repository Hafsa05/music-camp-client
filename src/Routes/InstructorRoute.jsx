import { Navigate, useLocation } from "react-router";
import { useContext } from "react";
import { AuthContext } from "../pages/providers/AuthProvider";
import useIsInstructor from "../hooks/useIsInstructor/useIsInstructor";


const InstructorRoute = ({ children }) => {
    const { user, loading } = useContext(AuthContext);
    const [isInstructor, isInstructorLoading] = useIsInstructor()
    const location = useLocation();

    if(loading || isInstructorLoading){
		return <span className="text-sky-600 loading loading-bars loading-lg"></span>;
    }

    if (user && isInstructor) {
        return children;
    }
    return <Navigate to="/" state={{from: location}} replace></Navigate>
};

export default InstructorRoute;