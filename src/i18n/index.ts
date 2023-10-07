import i18n from "i18next";
import {initReactI18next} from "react-i18next";
import Backend from "i18next-http-backend";
import * as Path from "path-browserify";

import {PUBLIC_PATH} from "../env";


i18n
    .use(Backend)
    .use(initReactI18next)
    .init({
        lng: "ua",
        fallbackLng: "en",
        debug: true,
        backend: {
            loadPath: Path.join(PUBLIC_PATH, "/locales/{{lng}}.json")
        },
        interpolation: {
            escapeValue: false
        }
    });
