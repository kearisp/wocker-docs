import React, {Suspense} from "react";
import {BrowserRouter, Routes, Route, Outlet} from "react-router-dom";

import {PUBLIC_PATH, ROUTES} from "./env";
import {LoadingScreen, MarkdownScreen} from "./blocks";
import {HomePage} from "./pages";
import {DashboardLayout} from "./layouts";
import {ThemeProvider} from "./providers";
import "./App.scss";

import "./i18n";


const App: React.FC = () => {
    return (
        <ThemeProvider>
            <Suspense fallback={<LoadingScreen />}>
                <BrowserRouter basename={PUBLIC_PATH}>
                    <Routes>
                        <Route
                          element={
                            <DashboardLayout>
                                <Outlet />
                            </DashboardLayout>
                          }>
                            <Route path={ROUTES.home} element={<HomePage />} />
                            <Route path={ROUTES.installation} element={<MarkdownScreen path="get-started/installation" />} />
                            <Route path={ROUTES.overview} element={<MarkdownScreen path="get-started/overview" />} />
                            <Route path={ROUTES.projectInit} element={<MarkdownScreen path="projects/init" />} />
                            <Route path={ROUTES.projectManagement} element={<MarkdownScreen path="projects/management" />} />
                            <Route path={ROUTES.projectConfig} element={<MarkdownScreen path="projects/config" />} />
                            <Route path={ROUTES.projectDomains} element={<MarkdownScreen path="projects/domains" />} />
                            <Route path={ROUTES.pluginsProxy} element={<MarkdownScreen path="plugins/proxy" />} />
                            <Route path={ROUTES.pluginsMariadb} element={<MarkdownScreen path="plugins/mariadb" />} />
                            <Route path={ROUTES.pluginsServeo} element={<MarkdownScreen path="plugins/serveo" />} />
                            <Route path={ROUTES.pluginsCustom} element={<MarkdownScreen path="plugins/custom" />} />
                        </Route>
                    </Routes>
                </BrowserRouter>
            </Suspense>
        </ThemeProvider>
    );
};


export {App};
