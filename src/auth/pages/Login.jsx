import { useMemo } from "react"
import { useDispatch, useSelector } from "react-redux"
import { Link as RouterLink } from "react-router-dom"

import { Google } from "@mui/icons-material"
import { Button, Grid, Link, TextField, Typography } from "@mui/material"

import { useForm } from "../../hooks"
import { checkingAuthentication, startGoogleAuthentication } from "../../store/auth"

export const Login = () => {
    const { status } = useSelector(state => state.auth);
    const dispatch = useDispatch();
    
    const { email, password, onInputChange } = useForm({
        email: 'david@email.com',
        password: 123456
    });

    const  isAuthenticating = useMemo(() => status === 'checking', [status]);

    const onSubmit = (e) => {
        e.preventDefault();
        dispatch(checkingAuthentication(email, password));
        console.log({ email, password });
    }

    const onGoogleSignIn = () => {
        dispatch(startGoogleAuthentication());
        console.log('onGoogleSignIn');
    }
    
    return (
        <form onSubmit={ onSubmit }>
            <Typography variant="h5" sx={{ mb: 1 }}>Login</Typography>
            <Grid container>
                <Grid item xs={ 12 } sx={{ mt: 2 }}>
                    <TextField
                        label="Correo"
                        type="email"
                        placeholder="correo@example.com"
                        fullWidth
                        name="email"
                        onChange={ onInputChange }
                        value={ email }
                    />
                </Grid>
                <Grid item xs={ 12 } sx={{ mt: 2 }}>
                    <TextField
                        label="Contraseña"
                        type="password"
                        placeholder="Contraseña"
                        fullWidth
                        name="password"
                        onChange={ onInputChange }
                        value={ password }
                    />
                </Grid>
                <Grid container spacing={ 2 } sx={{ mb: 2, mt: 1 }}>
                    <Grid item xs={ 12 } sm={ 6 }>
                        <Button 
                            variant="contained" 
                            fullWidth 
                            type="submit"
                            disabled={ isAuthenticating }
                        >
                            Login
                        </Button>
                    </Grid>
                    <Grid item xs={ 12 } sm={ 6 }>
                        <Button 
                            variant="contained"
                            fullWidth
                            onClick={ onGoogleSignIn }
                            disabled={ isAuthenticating }
                        >
                            <Google />
                            <Typography sx={{ ml: 1 }}>Google</Typography>
                        </Button>
                    </Grid>
                </Grid>

                <Grid container direction="row" justifyContent="end">
                    <Link component={ RouterLink } color='inherit' to="/auth/register">
                        Crea una cuenta
                    </Link>
                </Grid>
            </Grid>
        </form>
    )
}
