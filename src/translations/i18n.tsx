import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import resources from "./resources";

const initI18n = async (locale: string) => {
    try {
        await i18n.use(initReactI18next).init({
            resources,
            lng: locale,
            interpolation: {
                escapeValue: false,
            },
        });
    } catch (error) {
        console.log("Internal i18N error on initialize");
    }
};

export default initI18n;
