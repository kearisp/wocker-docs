import React, {useState, useEffect} from "react";
import * as Path from "path-browserify";
import {useTranslation} from "react-i18next";

import {DOCS_URL} from "../../env";
import {Markdown} from "../Markdown";


type Props = {
    path: string;
};

const MarkdownScreen: React.FC<Props> = (props) => {
    const {
        path
    } = props;

    const [text, setText] = useState("");
    const [, i18n] = useTranslation();

    useEffect(() => {
        (async () => {
            const url = new URL(DOCS_URL, window.location.href);

            const ext = Path.extname(path) || ".md";
            const dirname = Path.dirname(path);
            const filename = Path.basename(path, ext);

            url.pathname = Path.join(url.pathname, dirname, `${filename}-${i18n.language}${ext}`);

            const res = await fetch(url.toString());

            if(res.status !== 200) {
                return;
            }

            setText(await res.text());
        })();
    }, [path, i18n.language]);

    return (
        <Markdown
          content={text} />
    );
};


export {MarkdownScreen};
