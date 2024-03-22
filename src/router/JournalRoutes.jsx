import { Navigate } from "react-router-dom";
import { Error404 } from "../errors/Error404";
import { JournalLayout } from "../journal/layout/JournalLayout";
import { Journal } from "../journal/pages/Journal";
import { AppTheme } from "../theme";

export const JournalRoutes = [
    {
        path: '/',
        element: (
            <AppTheme>
                <JournalLayout/>
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
        path: '/*',
        element: <Navigate to="/" />
    }
];