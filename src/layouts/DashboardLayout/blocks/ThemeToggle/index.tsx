import React, {useMemo, useCallback} from "react";
import {useColorScheme, Switch} from "@mui/material";


const ThemeToggle: React.FC = () => {
    const {mode, setMode} = useColorScheme();

    const active = useMemo(() => {
        return mode === "light";
    }, [mode]);

    const handleChange = useCallback((ignore, active: boolean) => {
        if(active) {
            setMode("light");
        }
        else {
            setMode("dark");
        }
    }, [setMode]);

    return (
        <Switch
          color="default"
          checked={active}
          onChange={handleChange} />
    );
};


export {ThemeToggle};
