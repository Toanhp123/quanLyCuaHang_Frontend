import { Route } from "react-router-dom";
import { Profile } from "../pages";
import { RequireAuth } from "../components";

const privateRoutes = (
    <Route element={<RequireAuth />}>
        <Route path="/profile" element={<Profile />} />
    </Route>
);

export default privateRoutes;
