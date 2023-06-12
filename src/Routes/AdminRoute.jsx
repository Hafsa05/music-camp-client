import { Navigate, useLocation } from "react-router";
import { useContext } from "react";
import { AuthContext } from "../pages/providers/AuthProvider";
import useAdmin from "../hooks/useAdmin/useAdmin";


const AdminRoute = ({ children }) => {
    const { user, loading } = useContext(AuthContext);
    const [isAdmin, isAdminLoading] = useAdmin()
    const location = useLocation();

    if(loading || isAdminLoading){
		return <span className="text-sky-600 loading loading-bars loading-lg"></span>;
    }

    if (user && isAdmin) {
        return children;
    }
    return <Navigate to="/" state={{from: location}} replace></Navigate>
};

export default AdminRoute;