import { registerUserWithEmailPassword, signInWithGoogle } from "../../firebase/providers";
import { checkingCredentials, login, logout } from "./";

export const checkingAuthentication = (email, password) => {
    return async (dispatch) => {
        dispatch(checkingCredentials());

    }
};

export const startGoogleAuthentication = () => {
    return async(dispatch) => {
        dispatch(checkingCredentials());

        const result = await signInWithGoogle();

        if (!result.status) return dispatch(logout(result.errorMessage));

        dispatch(login(result));
    }
}

export const startCreatingUserWithEmailPassword = ({ email, password, displayName }) => {
    return async(dispatch) => {
        dispatch(checkingCredentials());

       const resp = await registerUserWithEmailPassword({ email, password, displayName });
    }
}