import { collection, doc, setDoc } from "firebase/firestore/lite";
import { FirebaseDB } from "../../firebase/config";

export const StartNewNote = () => {
    return async (dispatch, getState) => {
        const { uid } = getState().auth;
        
        const newNote = {
            title: '',
            body: '',
            date: new Date().getTime(),
        };

        // TODO: Dispatch action to add new note
        const newDoc = doc( collection( FirebaseDB, `${ uid }/jounral/notes` ) );
        const setDocResp = await setDoc( newDoc, newNote );

        console.log({ setDocResp, newDoc });
        
    };
};