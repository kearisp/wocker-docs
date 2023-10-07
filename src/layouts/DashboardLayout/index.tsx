import React, {useState, useCallback, PropsWithChildren} from "react";
import {Link} from "react-router-dom";
import {useTranslation} from "react-i18next";
import {
    AppBar,
    Toolbar,
    Box,
    Select,
    SelectChangeEvent,
    IconButton,
    MenuItem,
    Typography,
    useTheme,
    useMediaQuery
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";

import {ROUTES} from "../../env";
import {asset} from "../../utils";
import {Sidebar, ThemeToggle} from "./blocks";


type Props = PropsWithChildren;

const DashboardLayout: React.FC<Props> = (props) => {
    const {
        children
    } = props;

    const theme = useTheme();
    const [, i18n] = useTranslation();

    // i18n.language
    const isMobile = useMediaQuery(theme.breakpoints.down("sm"));
    const [, setOpen] = useState(false);

    const handleToggleMenu = useCallback(() => {
        setOpen((open) => !open);
    }, []);

    const handleChangeLanguage = useCallback((e: SelectChangeEvent) => {
        if(!e.target) {
            return;
        }

        i18n.changeLanguage(e.target.value);
    }, [i18n]);

    return (
        <>
            <AppBar position="fixed">
                <Toolbar>
                    {isMobile && (
                        <IconButton
                          onClick={handleToggleMenu}>
                            <MenuIcon />
                        </IconButton>
                    )}

                    <img
                      style={{
                        marginRight: 8,
                        height: 40
                      }}
                      alt="WS"
                      src={asset("img.png")} />

                    <Typography
                      sx={{
                        flexGrow: 1,
                        display: {
                            xs: "none",
                            sm: "block"
                        },
                        mr: 2,
                        fontWeight: 700,
                        color: "inherit",
                        textDecoration: "none"
                      }}
                      component={Link}
                      variant="h6"
                      noWrap
                      to={ROUTES.home}>
                        Wocker
                    </Typography>

                    <Select
                      variant="outlined"
                      size="small"
                      value={i18n.language}
                      onChange={handleChangeLanguage}>
                        <MenuItem value="ua">Ukrainian</MenuItem>
                        <MenuItem value="en">English</MenuItem>
                    </Select>

                    <ThemeToggle />
                </Toolbar>
            </AppBar>

            <Box sx={theme.mixins.toolbar} />

            <Box display="flex">
                {!isMobile && (
                    <Box sx={{width: 220, flexBasis: 220, minWidth: 220}}>
                        <Sidebar />
                    </Box>
                )}

                <Box>
                    {children}
                </Box>
            </Box>
        </>
    );
};


export {DashboardLayout};
