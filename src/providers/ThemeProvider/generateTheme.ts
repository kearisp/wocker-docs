import {alpha, ThemeOptions} from "@mui/material/styles";


export const blue = {
    50: '#F0F7FF',
    100: '#C2E0FF',
    200: '#99CCF3',
    300: '#66B2FF',
    400: '#3399FF',
    main: '#007FFF',
    500: '#007FFF',
    600: '#0072E5', // vs blueDark 900: WCAG 4.6 AAA (large), APCA 36 Not for reading text
    700: '#0059B2',
    800: '#004C99',
    900: '#003A75',
};

export const grey = {
    50: '#F3F6F9',
    100: '#E5EAF2',
    200: '#DAE2ED',
    300: '#C7D0DD', // vs blueDark 900: WCAG 11.6 AAA, APCA 78 Best for text
    400: '#B0B8C4', // vs blueDark 900: WCAG 9 AAA, APCA 63.3 Ok for text
    500: '#9DA8B7', // vs blueDark 900: WCAG 7.5 AAA, APCA 54.3 Only for large text
    600: '#6B7A90', // vs white bg: WCAG 4.1 AA, APCA 68.7 Ok for text
    700: '#434D5B', // vs white bg: WCAG 8.3 AAA, APCA 88.7 Best for text
    800: '#303740', // vs white bg: WCAG 11.9 AAA, APCA 97.3 Best for text
    900: '#1C2025',
};

export const blueDark = {
    50: '#EAEDF1',
    100: '#DAE0E7',
    200: '#ACBAC8',
    300: '#7B91A7',
    main: '#7B91A7',
    400: '#4B5E71',
    500: '#3B4A59',
    600: '#2F3A46',
    700: '#1F262E', // contrast 13.64:1
    800: '#141A1F',
    900: '#101418',
};

export const generateTheme = (mode: "light" | "dark"): ThemeOptions => {
    return {
        palette: {
            mode,
            common: {
                black: "#0B0D0E"
            },
            primary: mode === "dark" ? blueDark : blue,
            secondary: {
                ...grey,
                ...(mode === 'light' && {
                    main: blueDark[100],
                    contrastText: blueDark[600],
                }),
                ...(mode === 'dark' && {
                    main: blueDark[700],
                    contrastText: blueDark[600],
                })
            },
            divider: mode === "dark" ? alpha(blueDark[100], 0.08) : grey[100],
            ...(mode === "dark" && {
                background: {
                    default: blueDark[800],
                    paper: blueDark[900],
                },
            }),
            text: {
                ...(mode === "light" && {
                    primary: grey[900],
                    secondary: grey[700],
                    tertiary: grey[600],
                }),
                ...(mode === "dark" && {
                    primary: '#fff',
                    secondary: grey[400],
                    tertiary: grey[400],
                }),
            },
        },
        typography: {
            h1: {
                fontSize: "2em"
            },
            h2: {
                fontSize: "1.5em"
            },
            h3: {
                fontSize: "1.3em"
            }
        }
    };
};
