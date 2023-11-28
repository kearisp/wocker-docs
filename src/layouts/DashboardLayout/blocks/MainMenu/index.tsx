import React, {useState, useCallback} from "react";
import {Link} from "react-router-dom";
import clsx from "clsx";
import {useTranslation} from "react-i18next";
import {
    List,
    ListItemButton,
    ListItemIcon,
    ListItemText,
    Collapse
} from "@mui/material";
import ArrowRightIcon from "@mui/icons-material/KeyboardArrowRightRounded";

import {MenuItem} from "../../../../types";
import {useMatchPath} from "../../../../hooks";
import "./index.scss";


type Props = {
    isChild?: boolean;
    items: MenuItem[];
};

const MainMenu: React.FC<Props> = (props) => {
    const {
        isChild,
        items
    } = props;

    const [t] = useTranslation();
    const matchPath = useMatchPath();
    const [openIndexes, setOpenIndexes] = useState<number[]>(() => {
        const openIndexes: number[] = [];

        items.forEach((menuItem, index) => {
            let isActive = matchPath(menuItem.to);

            if(isActive) {
                openIndexes.push(index);
            }
        });

        return openIndexes;
    });

    const modifications = clsx({
        "main-menu--child": isChild
    });

    const handleToggle = useCallback((index: number) => {
        setOpenIndexes((openIndexes) => {
            if(openIndexes.includes(index)) {
                return openIndexes.filter((openIndex: number) => {
                    return openIndex !== index;
                });
            }

            return [
                ...openIndexes,
                index
            ];
        });
    }, []);

    return (
        <List
          sx={{
            pl: isChild ? 4 : undefined
          }}
          className={`main-menu ${modifications}`}
          disablePadding={isChild}>
            {items.map((item, index) => {
                const {
                    label,
                    children,
                    to
                } = item;

                const modifications = clsx({
                    "main-menu-item--active": matchPath(to)
                });

                return (
                    <React.Fragment key={index}>
                        <ListItemButton
                          component={Link}
                          className={`main-menu-item ${modifications}`}
                          to={to}
                          onClick={(e) => {
                            if(children && children.length > 0) {
                                e.preventDefault();

                                handleToggle(index);
                            }
                          }}>
                            <ListItemText primary={t(label)} />

                            <ListItemIcon>
                                {children && children.length > 0 && (
                                    <ArrowRightIcon
                                      sx={{
                                        transition: "0.3s",
                                        transform: openIndexes.includes(index) ? "rotate(90deg)" : "rotate(0)"
                                      }}
                                      color="primary" />
                                )}
                            </ListItemIcon>
                        </ListItemButton>

                        {children && children.length > 0 && (
                            <Collapse in={openIndexes.includes(index)}>
                                <MainMenu
                                  isChild
                                  items={children} />
                            </Collapse>
                        )}
                    </React.Fragment>
                );
            })}
        </List>
    );
};


export {MainMenu};
