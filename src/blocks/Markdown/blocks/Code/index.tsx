import React, {useContext, useMemo, useEffect, CSSProperties} from "react";
import SyntaxHighlighter from "react-syntax-highlighter";
import {docco, idea, darcula} from "react-syntax-highlighter/dist/esm/styles/hljs";
import {useColorScheme} from "@mui/material/styles";

import {CodeBlockContext} from "../CodeBlock";
import {PreConsumer, PreContext} from "../Pre";
import "./index.scss";


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

    const {hasPre} = useContext(PreContext);

    const langProps = useMemo(() => {
        if(hasPre && ["typescript"].includes(lang)) {
            return {
                showLineNumbers: true,
                startingLineNumber: 1
            };
        }

        return {};
    }, [hasPre, lang]);

    const style = useMemo(() => {
        return mode === "dark" ? darcula : {
            ...idea,
            hljs: docco.hljs
        };
    }, [mode]);

    const customStyle = useMemo((): CSSProperties => {
        if(["text", "shell"].includes(lang)) {
            return {
                lineHeight: 1.15
            };
        }

        return {};
    }, [lang]);

    useEffect(() => {
        if(title) {
            register(title);
        }
    }, [title]); // eslint-disable-line

    return (
        <SyntaxHighlighter
          {...langProps}
          PreTag={PreConsumer}
          style={style}
          customStyle={customStyle}
          language={lang}>
            {children}
        </SyntaxHighlighter>
    );
};


export {Code};
