import React, {useState, useMemo, useEffect} from "react";
import * as Path from "path-browserify";
import {useTranslation} from "react-i18next";

import {DOCS_URL} from "../../env";
import {titleToId} from "../../utils";
import {Markdown} from "../Markdown";
import {TableOfContents} from "../TableOfContents";


type Heading = {
    id: string;
    title: string;
    children?: Heading[];
};

type Props = {
    path: string;
};

const MarkdownScreen: React.FC<Props> = (props) => {
    const {
        path
    } = props;

    const [text, setText] = useState("");
    const [, i18n] = useTranslation();

    const headings = useMemo(() => {
        const headings: Heading[] = [];
        const lastLevelMap: any = {};

        (text.match(/#{1,6}\s(.*?)(?=\n)/g) || []).forEach((text: string) => {
            const [, levelMark, title] = /(#{1,6})\s(.*)/.exec(text) || [];
            const level = levelMark.length;

            const header: Heading = {
                id: titleToId(title),
                title,
                children: []
            };

            if(lastLevelMap[level - 1]) {
                lastLevelMap[level - 1].children.push(header);
            }
            else {
                headings.push(header);
            }

            lastLevelMap[level] = header;
        });

        if(headings.length === 1) {
            return headings[0].children || [];
        }

        return headings;
    }, [text]);


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
        <div style={{display: "flex"}}>
            <div
              style={{flex: 1}}>
                <Markdown
                  content={text} />
            </div>

            {headings.length > 0 && (
                <div
                  style={{
                    flexBasis: "200px",
                    paddingTop: "20px"
                  }}>
                    <TableOfContents headings={headings} />
                </div>
            )}
        </div>
    );
};


export {MarkdownScreen};
