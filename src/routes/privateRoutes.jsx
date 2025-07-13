import { Route } from 'react-router-dom';

import Home from '../pages/Home';
import Profile from '../pages/Profile';
import RequireAuth from '../components/RequireAuth';

const privateRoutes = (
    <Route element={<RequireAuth />}>
        <Route path="/" element={<Home />} />
        <Route path="/profile" element={<Profile />} />
    </Route>
);

export default privateRoutes;
