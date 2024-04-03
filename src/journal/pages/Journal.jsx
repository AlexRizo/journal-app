import { IconButton } from "@mui/material"
import { AddOutlined } from "@mui/icons-material"
import { NoteView, NothingSelectedView } from "../views"
import { useDispatch, useSelector } from "react-redux";
import { StartNewNote } from "../../store/journal";

export const Journal = () => {
    const dispatch = useDispatch();
    
    const onClickNewNote = () => {
        dispatch(StartNewNote());
    };

    const { isSaving, active } = useSelector(state => state.journal);

    return (
        <>
            {
                (!!active) ? <NoteView/> : <NothingSelectedView/>
            }
            <IconButton 
                onClick={ onClickNewNote }
                size="large"
                sx={{ 
                    color: 'white',
                    backgroundColor: 'error.main',
                    ':hover': { backgroundColor: 'error.main', opacity: 0.9, transition: '0.3s' },
                    position: 'fixed',
                    bottom: 50,
                    right: 50,
                }}
                disabled={ isSaving }
            >
                <AddOutlined sx={{ fontSize: 30 }} />
            </IconButton>
        </>
    )
}
