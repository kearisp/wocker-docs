import Path from "path-browserify";

import {PUBLIC_PATH} from "../env";


export const asset = (src: string) => {
    return Path.join(PUBLIC_PATH, src);
};
