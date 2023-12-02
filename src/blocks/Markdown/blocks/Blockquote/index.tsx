import React, {Children, PropsWithChildren} from "react";
import Box from "@mui/material/Box";


type Props = PropsWithChildren;

const Blockquote: React.FC<Props> = (props) => {
    const {
        children
    } = props;

    return (
        <Box
          sx={{
            borderLeft: "5px solid var(--wocker-palette-primary-main)",
            borderRadius: "4px",
            // paddingLeft: "16px",
            padding: "1px 0 1px 16px",
            margin: "0",
          }}
          component="blockquote">
            {Children.map(children, (child) => {
                return (child);
            })}
        </Box>
    );
};


export {Blockquote};
