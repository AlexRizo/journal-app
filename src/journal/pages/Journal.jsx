import { IconButton } from "@mui/material"
import { AddOutlined } from "@mui/icons-material"
import { NothingSelectedView } from "../views"

export const Journal = () => {
    return (
        <>
            <NothingSelectedView/>
            {/* <NoteView/> */}

            <IconButton 
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
