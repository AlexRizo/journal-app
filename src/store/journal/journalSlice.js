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
        },
        setNotes: (state, action) => {
            state.notes = action.payload;
        },
        setSaving: (state) => {
            
        },
        updateNote: (state, action) => {
            
        },
        deleteNoteById: (state, action) => {
                
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
    deleteNoteById,
} = journalSlice.actions;