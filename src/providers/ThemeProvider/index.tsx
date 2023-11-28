import React, {useMemo, PropsWithChildren} from "react";
import {
    CssBaseline,
    StyledEngineProvider,
    // ThemeProvider as MuiThemeProvider,
    Experimental_CssVarsProvider as CssVarsProvider,
    experimental_extendTheme as extendTheme
} from "@mui/material";
import useMediaQuery from "@mui/material/useMediaQuery";

import {generateTheme} from "./generateTheme";


type Props = PropsWithChildren;

const ThemeProvider: React.FC<Props> = (props) => {
    const {
        children
    } = props;

    const prefersDarkMode = useMediaQuery("(prefers-color-scheme: dark)");

    const eTheme = useMemo(() => {
        return extendTheme({
            cssVarPrefix: "wocker",
            colorSchemes: {
                light: generateTheme("light"),
                dark: generateTheme("dark")
            }
        });
    }, []);

    return (
        <StyledEngineProvider injectFirst>
            <CssVarsProvider
              defaultColorScheme={prefersDarkMode ? "dark" : "light"}
              theme={eTheme}>
                {/*<MuiThemeProvider theme={theme}>*/}
                    <CssBaseline />

                    {children}
                {/*</MuiThemeProvider>*/}
            </CssVarsProvider>
        </StyledEngineProvider>
    );
};


export {ThemeProvider};
