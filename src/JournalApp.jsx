import { Navigate, RouterProvider, createBrowserRouter } from "react-router-dom";

import { CheckingAuth } from "./ui";
import { AppTheme } from "./theme";
import { AppRouter } from "./router/AppRouter";
import { useCheckAuth } from "./hooks";

export const JournalApp = () => {
    
    const status = useCheckAuth();

    if (status === 'checking') return (
        <AppTheme>
            <CheckingAuth />
        </AppTheme>
    );


    return <RouterProvider router={ createBrowserRouter(AppRouter(status)) } />
}