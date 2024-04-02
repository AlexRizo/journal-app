import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    isSaving: true,
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
        addNewEmptyNote: (state, action) => {

        },
        setActiveNote: (state, action) => {

        },
        setNotes: (state, action) => {
                
        },
        setSaving: (state) => {
            
        },
        updateNote: (state, action) => {
            
        },
        deleteNoteById: (state, action) => {
                
        },
    },
});

export const { increment } = journalSlice.actions;