
import { Routes, Route } from "react-router";

import { HomePage } from "../pages/HomePage";
import { TaskPage } from "../pages/TaskPage";
import { ProfilePage } from "../pages/ProfilePage";
import { NotFoundPage } from "../pages/NotFoundPage";
import { LoginPage } from "../pages/LoginPage";
import { ProtectedRoute } from "./protectedRoute";

export function AppRoutes() {
    const isAuthenticated = false;

    return (
        <Routes>
            <Route path="/" element={<HomePage/>}/>
            <Route path="/login" element={<LoginPage/>}/>
            <Route path="*" element={<NotFoundPage/>}/>
            <Route element={<ProtectedRoute isAuthenticated={isAuthenticated}/>}>
                <Route path="/tasks" element={<TaskPage/>}/>
                <Route path="/profile" element={<ProfilePage/>}/>
            </Route>
        </Routes>
    );
}
