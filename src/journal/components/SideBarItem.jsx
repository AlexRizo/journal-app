import { TurnedInNot } from '@mui/icons-material'
import { Grid, ListItem, ListItemButton, ListItemIcon, ListItemText } from '@mui/material'
import React, { useMemo } from 'react'
import { useDispatch } from 'react-redux';
import { setActiveNote } from '../../store/journal';

export const SideBarItem = ({ title, body, date, imageUrls, id }) => {
    const dispatch = useDispatch();
    const note = { title, body, date, id, imageUrls };

    const onSetNote = (note) => {
        dispatch(setActiveNote(note));
    };
    
    const newTitle = useMemo(() => {
        return title.length > 17 
            ? title.substring(0, 17) + '...'
            : title;
    }, [title]);

    return (
        <ListItem disablePadding onClick={ () => onSetNote(note) }>
            <ListItemButton>
                <ListItemIcon>
                    <TurnedInNot />
                </ListItemIcon>
                <Grid>
                    <ListItemText primary={ newTitle } />
                    <ListItemText secondary={ body } />
                </Grid>
            </ListItemButton>
        </ListItem>
    )
}
