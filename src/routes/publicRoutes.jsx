import { Route } from "react-router-dom";
import { Home, Login, Register } from "../pages";


const publicRoutes = (
    <>
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/" element={<Home />} />
    </>
);

export default publicRoutes;
