import React, {useMemo, PropsWithChildren} from "react";
import {
    CssBaseline,
    StyledEngineProvider,
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
              modeStorageKey="mode"
              colorSchemeStorageKey="color-scheme"
              attribute="data-color-scheme"
              defaultMode={prefersDarkMode ? "dark" : "light"}
              theme={eTheme}>
                <CssBaseline />

                {children}
            </CssVarsProvider>
        </StyledEngineProvider>
    );
};


export {ThemeProvider};
