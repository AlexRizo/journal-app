import { useEffect, useMemo, useRef } from "react";

import { useSelector, useDispatch } from "react-redux";
import Swal from "sweetalert2";
import 'sweetalert2/dist/sweetalert2.css';

import { Button, Grid, TextField, Typography, IconButton } from "@mui/material"
import { DeleteOutline, SaveOutlined, UploadOutlined } from "@mui/icons-material";

import { useForm } from "../../hooks/useForm"
import { ImageGalery } from "../components"
import { setActiveNote, startDeletingNote, startSavingNote, startUploadingFiles } from "../../store/journal";

export const NoteView = () => {
    const dispatch = useDispatch();
    
    const { active:note, savedMessage, isSaving } = useSelector(state => state.journal)
    
    const { body, title, date, onInputChange, formState } = useForm(note);

    const dateString = useMemo(() => {
        const newDate = new Date(date);
        return newDate.toUTCString();
    }, [date]);

    useEffect(() => {
        dispatch(setActiveNote(formState));
    }, [formState]);

    useEffect(() => {
      if(savedMessage) {
        Swal.fire('Nota Actualizada', savedMessage, 'success');
      }
    }, [savedMessage]);

    const fileInputRef = useRef();
    

    const onSaveNote = () => {
        dispatch(startSavingNote());
    }

    const onFileInputChange = ({ target }) => {
        if (target.files === 0) return;

        dispatch(startUploadingFiles(target.files));
    }
    
    const onDelete = () => {
        dispatch(startDeletingNote());
    };
    
    return (
        <Grid 
            container
            direction="row"
            justifyContent="space-between"
            alignItems="center"
            sx={{ mb: 1, maxWidth: 1000, mx: 'auto' }}
            className="animate__animated animate__fadeIn animate__faster"
        >
            <Grid item>
                <Typography fontSize={ 39 } fontWeight="light">{ dateString }</Typography>
            </Grid>
            <Grid item>
                <input
                    ref={ fileInputRef }
                    type="file"
                    multiple
                    name="file"
                    onChange={ onFileInputChange }
                    style={{ display: 'none' }}
                />
                <IconButton
                    color="primary"
                    disabled={ isSaving }
                    onClick={ () => fileInputRef.current.click() }
                >
                    <UploadOutlined />
                </IconButton>
                <Button 
                    color="primary"
                    sx={{ padding: 2 }}
                    onClick={ onSaveNote }
                    disabled={ isSaving }
                >
                    <SaveOutlined sx={{ fontSize: 30, mr: 1 }} />
                    Guardar
                </Button>
            </Grid>

            <Grid container>
                <TextField
                    type="text"
                    variant="filled"
                    fullWidth
                    placeholder="Ingrese un título"
                    label="Título"
                    sx={{ border: 'none', mb: 1 }}
                    name="title"
                    value={ title }
                    onChange={ onInputChange }
                />
                <TextField
                    type="text"
                    variant="filled"
                    fullWidth
                    multiline
                    placeholder="¿Qué sucedió en el día hoy?"
                    label="Descripción"
                    minRows={ 5 }
                    name="body"
                    value={ body }
                    onChange={ onInputChange }
                />
                {/* Image Galery */}
            </Grid>

            <Grid container justifyContent='end'>
                <Button
                    onClick={ onDelete }
                    color="error"
                    sx={{ mt: 2 }}
                >
                    <DeleteOutline />
                    Borrar
                </Button>
            </Grid>

            <ImageGalery images={ note.imageUrls } />
        </Grid>
    )
}