import { Navigate, Outlet } from "react-router-dom";
import { useSelector } from "react-redux";

function RequireAuth() {
    const user = useSelector((state) => state.auth.user);

    return user.id !== null ? <Outlet /> : <Navigate to="/login" replace />;
}

export default RequireAuth;
