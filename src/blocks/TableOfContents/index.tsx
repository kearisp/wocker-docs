import React from "react";
import Typography from "@mui/material/Typography";


type Heading = {
    id: string;
    title: string;
    children?: Heading[];
};

type Props = {
    headings: Heading[];
    level?: number;
};

const TableOfContents: React.FC<Props> = (props) => {
    const {
        headings,
        level = 0
    } = props;

    return (
        <div
          style={{
            paddingLeft: level > 0 ? 10 : 0
          }}>
            {headings.map((heading) => {
                const {
                    id,
                    title,
                    children
                } = heading;

                return (
                    <div key={id}>
                        <Typography
                          component="a"
                          color="primary.light"
                          href={`#${id}`}>
                            {title}
                        </Typography>

                        {children && (
                            <TableOfContents
                              level={level + 1}
                              headings={children} />
                        )}
                    </div>
                );
            })}
        </div>
    );
};


export {TableOfContents}
