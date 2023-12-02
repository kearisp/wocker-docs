import React, {useMemo} from "react";
import MarkdownJSX from "markdown-to-jsx";
import Typography from "@mui/material/Typography";

import {titleToId} from "../../utils";
import {A, Blockquote, Code, CodeBlock, H, Pre} from "./blocks";


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
            slugify: titleToId,
            overrides: {
                h1: {
                    component: H,
                    props: {
                        variant: "h1"
                    }
                },
                h2: {
                    component: H,
                    props: {
                        variant: "h2"
                    }
                },
                h3: {
                    component: H,
                    props: {
                        variant: "h3"
                    }
                },
                h4: {
                    component: H,
                    props: {
                        variant: "h4"
                    }
                },
                p: {
                    component: Typography,
                    props: {
                        sx: {
                            mt: 1,
                            mb: 1
                        },
                        variant: "body1"
                    }
                },
                blockquote: {
                    component: Blockquote
                },
                pre: {
                    component: Pre
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
