import React, {PropsWithChildren} from "react";
import {useTheme} from "@mui/material/styles";
import Typography, {TypographyProps} from "@mui/material/Typography";
import Icon from "@mui/material/Icon";
import LinkIcon from "@mui/icons-material/Link";


type Props = PropsWithChildren<{
    id: string;
    variant: TypographyProps["variant"];
}>;

const H: React.FC<Props> = (props) => {
    const {
        id,
        variant,
        children
    } = props;

    const theme = useTheme();

    return (
        <Typography
          sx={{
            mt: 4,
            mb: 3,
            display: "flex",
            alignItems: "center",
            scrollMarginTop: "calc(var(--wocker-header-height) + 32px)",
            "& .anchor-link": {
                display: "inline-flex",
                visibility: "hidden",
                cursor: "pointer",
                alignItems: "center",
                justifyContent: "center",
                flexShrink: 0,
                textAlign: "center",
                marginLeft: 3,
                height: 26,
                width: 26,
                // backgroundColor: `var(--wocker-palette-primary-50, ${theme.palette.primary[50]})`,
                border: "1px solid",
                borderColor: theme.palette.divider,
                borderRadius: 8,
                color: "var(--wocker-palette-text-primary)",
                "&:hover": {
                    borderColor: theme.palette.primary.main,
                    color: theme.palette.primary.main
                }
            },
            "&:hover .anchor-link": {
                visibility: "visible"
            }
          }}
          id={id}
          variant={variant}>
            {children}

            <a className="anchor-link" href={`#${id}`}>
                <Icon
                  sx={{
                    fontSize: 18,
                  }}
                  component={LinkIcon} />
            </a>
        </Typography>
    );
};


export {H};
