import { t } from "i18next";

const data = () => {
    return [
        {
            id: Math.random(),
            value: "Калараш Бравичи",
            label: t("Калараш Бравичи"),
        },
        {
            id: Math.random(),
            value: "Калараш Лозово",
            label: t("Калараш Лозово"),
        },
    ];
};

export default data;
