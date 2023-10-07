import * as Path from "path-browserify";


export const PUBLIC_PATH = process.env.PUBLIC_URL ? new URL(process.env.PUBLIC_URL, window.location.href).pathname : "/";
export const DOCS_URL = process.env.REACT_APP_DOCS_URL || Path.join(PUBLIC_PATH, "/docs");

export const ROUTES = {
    home: "/",
    overview: "/get-started/overview",
    installation: "/get-started/installation",
    usage: "/get-started/usage",
    projectInit: "/project/init",
    projectConfig: "/project/config",
    pluginsProxy: "/plugins/proxy",
    pluginsMariadb: "/plugins/mariadb",
};

type MenuItem = {
    label: string;
    to: string;
    children?: MenuItem[];
};

export const MENU: MenuItem[] = [
    {
        label: "menu.get-started",
        to: "/get-started",
        children: [
            {
                label: "menu.overview",
                to: ROUTES.overview
            },
            {
                label: "menu.installation",
                to: ROUTES.installation
            }
        ]
    },
    {
        label: "menu.projects",
        to: "/project",
        children: [
            {
                label: "menu.initialization",
                to: ROUTES.projectInit
            },
            {
                label: "menu.config",
                to: ROUTES.projectConfig
            }
        ]
    },
    {
        label: "menu.plugins",
        to: "/plugins",
        children: [
            {
                label: "menu.proxy",
                to: ROUTES.pluginsProxy
            },
            {
                label: "menu.mariadb",
                to: ROUTES.pluginsMariadb
            }
        ]
    }
];