import React, {useMemo, PropsWithChildren} from "react";
import {
    CssBaseline,
    StyledEngineProvider,
    ThemeProvider as MuiThemeProvider,
    createTheme,
    Experimental_CssVarsProvider as CssVarsProvider
} from "@mui/material";
// import {CssVars} from "@mui/material/styles";


type Props = PropsWithChildren;

const ThemeProvider: React.FC<Props> = (props) => {
    const {
        children
    } = props;

    const theme = useMemo(() => {
        return createTheme({
            palette: {
                mode: "dark"
            },
            typography: {
                h1: {
                    fontSize: "2em"
                },
                h2: {
                    fontSize: "1.5em"
                }
            }
        });
    }, []);

    return (
        <StyledEngineProvider injectFirst>
            <CssVarsProvider>
                <MuiThemeProvider theme={theme}>
                    <CssBaseline />

                    {children}
                </MuiThemeProvider>
            </CssVarsProvider>
        </StyledEngineProvider>
    );
};


export {ThemeProvider};
