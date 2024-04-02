import { Link as RouterLink } from "react-router-dom"

import { Alert, Button, Grid, Link, TextField, Typography } from "@mui/material"

import { useForm } from "../../hooks";
import { useMemo, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { startCreatingUserWithEmailPassword } from "../../store/auth";

const formValidations = {
    displayName: [(value) => value.length >= 1, 'El nombre no es válido'],
    email: [(value) => value.includes('@'), 'El correo no es válido'],
    password: [(value) => value.length >= 6, 'La contraseña no es válida'],
}

const formData = {
    displayName: '',
    email: '',
    password: ''
}

export const Register = () => {
    const dispatch = useDispatch();
    
    const [formSubmitted, setFormSubmitted] = useState(false)

    const { status, errorMessage } = useSelector(state => state.auth);

    const isCheckingAuthentication = useMemo(() => status === 'checking', [status]);
    
    const { 
        displayName, email, password, onInputChange, formState,
        displayNameValid, emailValid, passwordValid, isFormValid
    } = useForm(formData, formValidations);

    const onSubmit = (e) => {
        e.preventDefault();
        setFormSubmitted(true);

        if (!isFormValid) return;

        dispatch(startCreatingUserWithEmailPassword(formState));
    }
    
    return (
        <>
            <form onSubmit={ onSubmit } className="animate__animated animate__fadeIn animate__faster" >
                <Typography variant="h5" sx={{ mb: 1 }}>Crear Cuenta</Typography>
                <Grid container>
                    <Grid item xs={ 12 } sx={{ mt: 2 }}>
                        <TextField
                            label="Nombre de usuario"
                            type="text"
                            placeholder="Nombre completo"
                            fullWidth
                            name="displayName"
                            onChange={ onInputChange }
                            value={ displayName }
                            error={ !!displayNameValid && formSubmitted }
                            helperText={ displayNameValid }
                        />
                    </Grid>
                    <Grid item xs={ 12 } sx={{ mt: 2 }}>
                        <TextField
                            label="Correo"
                            type="email"
                            placeholder="correo@ejemplo.com"
                            fullWidth
                            name="email"
                            onChange={ onInputChange }
                            value={ email }
                            error={ !!emailValid && formSubmitted }
                            helperText={ emailValid }
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
                            error={ !!passwordValid && formSubmitted }
                            helperText={ passwordValid }
                        />
                    </Grid>
                    <Grid container spacing={ 2 } sx={{ mb: 2, mt: 1 }}>
                        <Grid item xs={ 12 } display={ !!errorMessage ? '' : 'none' }>
                            <Alert severity="error">
                                { errorMessage }
                            </Alert>
                        </Grid>
                        
                        <Grid item xs={ 12 }>
                            <Button 
                                variant="contained"
                                fullWidth
                                type="submit"
                                disabled={ isCheckingAuthentication }
                            >
                                Crear cuenta
                            </Button>
                        </Grid>
                    </Grid>

                    <Grid container direction="row" justifyContent="end">
                        <Link component={ RouterLink } color='inherit' to="/auth/login">
                            ¿Ya tienes una cuenta?
                        </Link>
                    </Grid>
                </Grid>
            </form>
        </>
    )
}
