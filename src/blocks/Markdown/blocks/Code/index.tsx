import React, {useMemo, useContext, useEffect} from "react";
import Highlighter from "react-syntax-highlighter";
import {docco, idea, darcula} from "react-syntax-highlighter/dist/esm/styles/hljs";
import {useColorScheme} from "@mui/material/styles";

import {CodeBlockContext} from "../CodeBlock";


type Props = {
    className?: string;
    title?: string;
    children?: string;
};

const Code: React.FC<Props> = (props) => {
    const {
        className,
        title,
        children = ""
    } = props;

    const {mode} = useColorScheme();
    const {register} = useContext(CodeBlockContext);

    const lang = useMemo(() => {
        const [, lang = "text"] = /lang-(.*)/.exec(className || "") || [];

        return lang;
    }, [className]);

    useEffect(() => {
        if(title) {
            register(title);
        }
    }, [title]); // eslint-disable-line

    return (
        <Highlighter
          language={lang}
          style={mode === "dark" ? darcula : {
            ...idea,
            hljs: docco.hljs
          }}>
            {children}
        </Highlighter>
    );
};


export {Code};
