import { Routes, Route } from "react-router-dom";

import MainLayout from "../layouts/MainLayout";

import Home from "../pages/Home/Home";
import Events from "../pages/Events/Events";
import Dashboard from "../pages/Dashboard/Dashboard";
import Profile from "../pages/Profile/Profile";
import Login from "../pages/Login/Login";
import NotFound from "../pages/NotFound/NotFound";
import StudentRegistration from "../pages/StudentRegistration/StudentRegistration";

function AppRoutes() {
    return (
        <Routes>

            {/* Main Layout Pages */}
            <Route element={<MainLayout />}>
                <Route path="/" element={<Home />} />
                <Route path="/events" element={<Events />} />
                <Route path="/dashboard" element={<Dashboard />} />
                <Route path="/profile" element={<Profile />} />

                {/* Create Account / Student Registration */}
                <Route
                    path="/student-registration"
                    element={<StudentRegistration />}
                />

                {/* Not Found */}
                <Route path="*" element={<NotFound />} />
            </Route>

            {/* Login */}
            <Route path="/login" element={<Login />} />

        </Routes>
    );
}

export default AppRoutes;