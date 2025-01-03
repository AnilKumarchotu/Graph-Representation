import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { useNavigate } from "react-router-dom";
import Users from './Users';
import Topbar from './Topbar';

function AppRoutes() {

    const navigate = useNavigate();

    return (
        <Router>
              {/* <Topbar /> */}
            <Routes>
          
                <Route path="/Users" element={<Users />} />

            </Routes>
        </Router>
    );
}

export default AppRoutes;
