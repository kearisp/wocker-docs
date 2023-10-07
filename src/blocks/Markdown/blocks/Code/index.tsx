import React, {useContext, useEffect, PropsWithChildren} from "react";

import {CodeBlockContext} from "../CodeBlock";


type Props = PropsWithChildren<{
    className?: string;
    title?: string;
}>;

const Code: React.FC<Props> = (props) => {
    const {
        className,
        children,
        title,
    } = props;

    const {register} = useContext(CodeBlockContext);

    useEffect(() => {
        if(title) {
            register(title);
        }
    }, [title]); // eslint-disable-line

    return (
        <code className={className}>
            {children}
        </code>
    );
};


export {Code};
