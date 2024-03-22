import { Navigate, Outlet } from "react-router-dom"
import { Box, Toolbar } from "@mui/material"
import { Navbar, Sidebar } from "../components";
import { useCheckAuth } from "../../hooks";

const drawerWidth = 240;

export const JournalLayout = ({ status }) => {
    if (status === 'unauthenticated') return <Navigate to="/auth" />

    return (
        <Box sx={{ display: 'flex' }}>
            {/* Navbar drawerWidth */}
            <Navbar drawerWidth={ drawerWidth } />

            {/* Sidebar drawerWidth */}
            <Sidebar drawerWidth={ drawerWidth }/>

            <Box 
                component="main"
                sx={{ flexGrow: 1, p: 3 }}
            >
                {/* Toolbar */}
                <Toolbar />
                <Outlet />
            </Box>
        </Box>
    )
}