import { LogOutFirebase, loginWithEmailPassword, registerUserWithEmailPassword, signInWithGoogle } from "../../firebase/providers";
import { clearNotesLogout } from "../journal";
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

        if (!result.ok) return dispatch(logout(result.errorMessage));

        dispatch(login(result));
    }
};

export const startCreatingUserWithEmailPassword = ({ email, password, displayName }) => {
    return async (dispatch) => {
        dispatch(checkingCredentials());

        const { ok, uid, photoURL, errorMessage } = await registerUserWithEmailPassword({ email, password, displayName });

        if (!ok) return dispatch(logout({ errorMessage }));
       
        dispatch(login({ uid, email, displayName, photoURL }));
    };
};

export const startLoginWithEmailPassword = ({ email, password }) => {
    return async (dispatch) => {
        dispatch(checkingCredentials());

        const {ok, uid, photoURL, displayName, errorMessage } = await loginWithEmailPassword({ email, password });
        
        if (!ok) return dispatch(logout({ errorMessage }));

        
        dispatch(login({ uid, email, displayName, photoURL }));
    };
};

export const startLogOut = () => {
    return async (dispatch) => {
        await LogOutFirebase();
        dispatch(clearNotesLogout())
        dispatch(logout({}));
    };
};