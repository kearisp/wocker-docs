import React, {useState, useCallback, createContext, Children, PropsWithChildren} from "react";
import {Tabs, Tab} from "@mui/material";



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
        <React.Fragment>
            <Tabs value={activeTab} onChange={(e, value) => setActiveTab(value)}>
                {Children.map(children, (child, index) => {
                    return (
                        <Tab label={mapTitles[index] || ""} />
                    );
                })}
            </Tabs>

            {Children.map(children, (child, index) => {
                return (
                    <Context.Provider
                      value={{
                        register: (title: string) => handleRegisterTab(title, index),
                        unregister: () => handleUnregisterTab(index)
                      }}>
                        <div style={{display: activeTab === index ? "" : "none"}}>
                            {child}
                        </div>
                    </Context.Provider>
                );
            })}
        </React.Fragment>
    );
};


export {
    CodeBlock,
    Context as CodeBlockContext
};
