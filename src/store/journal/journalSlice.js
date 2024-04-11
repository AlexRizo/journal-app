import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    isSaving: false,
    savedMessage: '',
    notes: [],
    active: null,
    // active: {
    //     id: 'ABC123',
    //     title: '',
    //     body: '',
    //     date: 12312441,
    //     imageUrls: [], // https://foto1.jpg, https://foto2.jpg;
    // },
};

export const journalSlice = createSlice({
    name: 'journal',
    initialState,
    reducers: {
        creatingNewNote: (state) => {
            state.isSaving = true;
        },
        addNewEmptyNote: (state, action) => {
            state.notes.push(action.payload);
            state.isSaving = false;
        },
        setActiveNote: (state, action) => {
            state.active = action.payload;
            state.savedMessage = '';
        },
        setNotes: (state, action) => {
            state.notes = action.payload;
        },
        setSaving: (state) => {
            state.isSaving = true;
            state.savedMessage = '';
        },
        updateNote: (state, action) => {
            state.isSaving = false;
            state.notes = state.notes.map( note => {
                if (note.id === action.payload.id) return action.payload;
                return note
            });
            state.savedMessage = `La nota "${action.payload.title}" ha sido actualizada con éxito`;
        },
        setPhotosToActiveNote: (state, action) => {
            state.active.imageUrls = [ ...state.active.imageUrls, ...action.payload ];
            state.isSaving = false;
        },
        clearNotesLogout: (state) => {
            state.isSaving = false;
            state.savedMessage = '';
            state.notes = [];
            state.active = null;
        },
        deleteNoteById: (state, action) => {
            state.active = null;
            state.notes = state.notes.filter( note => note.id !== action.payload );
        },
    },
});

export const { 
    creatingNewNote,
    addNewEmptyNote,
    setActiveNote,
    setNotes,
    setSaving,
    updateNote,
    setPhotosToActiveNote,
    clearNotesLogout,
    deleteNoteById,
} = journalSlice.actions;