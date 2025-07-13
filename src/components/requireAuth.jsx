import { Navigate, Outlet } from "react-router-dom";

function requireAuth() {
    const isLoggedIn = !!localStorage.getItem("ACCESS_TOKEN"); // hoặc từ Redux, Context

    return isLoggedIn ? <Outlet /> : <Navigate to="/login" replace />;
}

export default requireAuth;
