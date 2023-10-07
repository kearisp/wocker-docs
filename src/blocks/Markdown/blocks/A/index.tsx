import React, {PropsWithChildren, ElementType} from "react";
import {Link, LinkProps} from "react-router-dom";
import {Link as MuiLink} from "@mui/material";


type Props = PropsWithChildren<{
    className?: string;
    href: string;
}>;

const A: React.FC<Props> = (props) => {
    const {
        className,
        href,
        children
    } = props;

    if(href.startsWith("http")) {
        return (
            <MuiLink
              className={className}
              target="_blank"
              href={href}>
                {children}
            </MuiLink>
        );
    }

    return (
        <MuiLink
          className={className}
          component={Link as ElementType<LinkProps>}
          to={href}>
            {children}
        </MuiLink>
    );
};


export {A};
