import { JournalLayout } from "../journal/layout/JournalLayout";
import { AuthLayout } from "../auth/layout/AuthLayout";
import { Login, Register } from "../auth/pages";
import { Error404 } from "../errors/Error404";
import { Journal } from "../journal/pages/Journal";
import { AppTheme } from "../theme";

export const AppRouter = [
    {
        path: '/',
        element: (
            <AppTheme>
                <JournalLayout />
            </AppTheme>
        ),
        errorElement: <Error404 />,
        children: [
            {
                path: '/',
                element: <Journal />
            }
        ],
        
    },
    {
        path: '/auth',
        element: (
            <AppTheme>
                <AuthLayout />
            </AppTheme>
        ),
        errorElement: <Error404 />,
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

    }
]