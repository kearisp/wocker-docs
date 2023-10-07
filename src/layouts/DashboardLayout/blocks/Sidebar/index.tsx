import React from "react";

import {MENU} from "../../../../env";
import {MainMenu} from "../MainMenu";


const Sidebar: React.FC = () => {
    return (
        <React.Fragment>
            <MainMenu items={MENU} />
        </React.Fragment>
    );
};


export {Sidebar};
