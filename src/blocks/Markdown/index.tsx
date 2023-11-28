import React, {useMemo} from "react";
import MarkdownJSX from "markdown-to-jsx";

import {titleToId} from "../../utils";
import {A, Code, CodeBlock, H} from "./blocks";


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
