import React, {useState, useCallback, createContext, Children, PropsWithChildren} from "react";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Card from "@mui/material/Card";
import Box from "@mui/material/Box";
import Divider from "@mui/material/Divider";


const Context = createContext<{
    register: (title: string) => void;
    unregister: () => void;
}>({
    register() {},
    unregister() {}
});


type Props = PropsWithChildren<{
    storageKey?: string;
}>;

const CodeBlock: React.FC<Props> = (props) => {
    const {
        children
    } = props;

    const [activeTab, setActiveTab] = useState(0);
    const [mapTitles, setMapTitles] = useState<any>({});

    const handleRegisterTab = useCallback((title: string, index: number) => {
        setMapTitles((mapTitles: any) => {
            return {
                ...mapTitles,
                [index]: title
            };
        });
    }, []);

    const handleUnregisterTab = useCallback((index: number) => {
        //
    }, []);

    return (
        <Card variant="outlined">
            <Tabs
              variant="standard"
              value={activeTab}
              onChange={(e, value) => setActiveTab(value)}>
                {Children.map(children, (child, index) => {
                    return (
                        <Tab
                          sx={{
                            textTransform: "none"
                          }}
                          label={mapTitles[index] || ""} />
                    );
                })}
            </Tabs>

            <Divider />

            {Children.map(children, (child, index) => {
                return (
                    <Context.Provider
                      value={{
                        register: (title: string) => handleRegisterTab(title, index),
                        unregister: () => handleUnregisterTab(index)
                      }}>
                        <Box
                          sx={{
                            display: activeTab === index ? "" : "none",
                            "& > pre": {
                                margin: 0,
                                background: "none !important"
                            }
                          }}>
                            {child}
                        </Box>
                    </Context.Provider>
                );
            })}
        </Card>
    );
};


export {
    CodeBlock,
    Context as CodeBlockContext
};
