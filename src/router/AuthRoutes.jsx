import { Navigate } from "react-router-dom";
import { AuthLayout } from "../auth/layout/AuthLayout";
import { Login, Register } from "../auth/pages";
import { AppTheme } from "../theme";

export const AuthRoutes = [
    {
        path: '/auth',
        element: (
            <AppTheme>
                <AuthLayout />
            </AppTheme>
        ),
        children: [
            {
                path: '/auth',
                element: <Login />
            },
            {
                path: 'login',
                element: <Login />
            },
            {
                path: 'register',
                element: <Register />
            }
        ],
    },
    {
        path: '/*',
        element: <Navigate to="/auth" />
    }
];