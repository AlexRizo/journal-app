import { createTheme } from '@mui/material';
import { red } from '@mui/material/colors';

export const colorTheme = createTheme({
    palette: {
        primary: {
            main: '#2b2a33',
        },
        secondary: {
            main: '#423995;',
        },
        error: {
            main: red.A400,
        },
    },
});