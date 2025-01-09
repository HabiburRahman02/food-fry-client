import { Navigate, useLocation } from "react-router-dom";
import useAdmin from "../../hooks/useAdmin";
import useAuth from "../../hooks/useMenu/useAuth";

const AdminRoute = ({ children }) => {
    const { user, loading } = useAuth();
    const location = useLocation()
    const [isAdmin, isAdminLoading] = useAdmin()

    if (loading || isAdminLoading) {
        return <p>Loading...</p>
    }
    if (user || isAdmin) {
        return children;
    }
    return <Navigate to='/login' state={location.pathname} ></Navigate>
};

export default AdminRoute;