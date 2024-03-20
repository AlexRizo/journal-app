import { Grid } from "@mui/material"
import { Navigate, Outlet } from "react-router-dom"
import { useCheckAuth } from "../../hooks"

export const AuthLayout = () => {
    const status = useCheckAuth();

    if (status === 'authenticated') return <Navigate to="/" />
    
    return (
        <Grid
            container
            spacing={ 0 }
            direction="column" 
            alignItems="center"
            justifyContent="center"
            sx={ { minHeight: '100vh', backgroundColor: 'primary.main', padding: 4 }}
        >
            <Grid item
                className="box-shadow"
                xs={ 3 }
                sx={{ width: { md: 450 }, backgroundColor: 'white', padding: 3, borderRadius: 2 }}
            >

                <Outlet />
                
            </Grid>
        </Grid>
    )
}
