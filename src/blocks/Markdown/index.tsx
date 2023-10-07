import React, {useMemo} from "react";
import MarkdownJSX from "markdown-to-jsx";
import {Typography} from "@mui/material";

import {A, Code, CodeBlock} from "./blocks";


const headerRegExp = /---[\r\n]([\s\S]*)[\r\n]---/;

type Props = {
    content: string;
};

const Markdown: React.FC<Props> = (props) => {
    const {
        content = ""
    } = props;

    const markdown = useMemo(() => {
        return content.replace(headerRegExp, "");
    }, [content]);

    return (
        <MarkdownJSX
          options={{
            overrides: {
                h1: {
                    component: Typography,
                    props: {
                        sx: {
                            mt: 3,
                            mb: 3
                        },
                        variant: "h1"
                    }
                },
                h2: {
                    component: Typography,
                    props: {
                        sx: {
                            mt: 3,
                            mb: 3
                        },
                        variant: "h2"
                    }
                },
                h3: {
                    component: Typography,
                    props: {
                        sx: {
                            mt: 3,
                            mb: 3
                        },
                        variant: "h3"
                    }
                },
                code: {
                    component: Code
                },
                codeblock: {
                    component: CodeBlock
                },
                a: {
                    component: A
                }
            }
          }}>
            {markdown}
        </MarkdownJSX>
    );
};


export {Markdown};
