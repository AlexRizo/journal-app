import { IconButton } from "@mui/material"
import { AddOutlined } from "@mui/icons-material"
import { NothingSelectedView } from "../views"
import { useDispatch } from "react-redux";
import { StartNewNote } from "../../store/journal";

export const Journal = () => {
    const dispatch = useDispatch();
    
    const onClickNewNote = () => {
        dispatch(StartNewNote());
    };

    return (
        <>
            <NothingSelectedView/>
            {/* <NoteView/> */}

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
            >
                <AddOutlined sx={{ fontSize: 30 }} />
            </IconButton>
        </>
    )
}
