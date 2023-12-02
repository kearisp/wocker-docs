import {createContext} from "react";


export const PreContext = createContext<{
    hasPre?: boolean;
    setProps: (props: any) => void;
}>({
    hasPre: false,
    setProps() {}
});
