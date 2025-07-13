import { BrowserRouter, Routes, Route } from 'react-router-dom';

import publicRoutes from './publicRoutes.jsx';
import privateRoutes from './privateRoutes.jsx';

function AppRoutes() {
    return (
        <BrowserRouter>
            <Routes>
                {publicRoutes}
                {privateRoutes}

                {/* Bắt routes sai */}
                <Route path="*" element={<div>404 Not Found</div>} />
            </Routes>
        </BrowserRouter>
    );
}

export default AppRoutes;
