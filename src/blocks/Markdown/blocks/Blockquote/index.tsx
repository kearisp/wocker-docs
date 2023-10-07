import React, {PropsWithChildren} from "react";
import {Alert} from "@mui/material";


type Props = PropsWithChildren

const Blockquote: React.FC<Props> = (props) => {
    const {
        children
    } = props;

    return (
        <Alert
          icon={false}
          severity="info">
            {children}
        </Alert>
    );
};


export {Blockquote};
