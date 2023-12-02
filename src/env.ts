import * as Path from "path-browserify";


export const PUBLIC_PATH = process.env.PUBLIC_URL ? new URL(process.env.PUBLIC_URL, window.location.href).pathname : "/";
export const DOCS_URL = process.env.REACT_APP_DOCS_URL || Path.join(PUBLIC_PATH, "/docs");

export const ROUTES = {
    home: "/",
    overview: "/get-started/overview",
    installation: "/get-started/installation",
    usage: "/get-started/usage",
    projectInit: "/project/init",
    projectStart: "/project/start",
    projectManagement: "/project/management",
    projectDomains: "/project/domains",
    configEnv: "/config/env",
    configBuildArgs: "/config/build-args",
    pluginsCustom: "/plugins/custom",
    pluginsProxy: "/plugins/proxy",
    pluginsMariadb: "/plugins/mariadb",
    pluginsServeo: "/plugins/serveo",
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
                label: "menu.project-management",
                to: ROUTES.projectManagement
            },
            {
                label: "menu.build-args",
                to: ROUTES.configBuildArgs
            },
            {
                label: "menu.env",
                to: ROUTES.configEnv
            },
            {
                label: "menu.domains",
                to: ROUTES.projectDomains
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
            },
            {
                label: "menu.serveo",
                to: ROUTES.pluginsServeo
            },
            {
                label: "menu.custom-plugin",
                to: ROUTES.pluginsCustom
            }
        ]
    }
];
