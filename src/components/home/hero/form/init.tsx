import { t } from "i18next";

interface Category {
    id: number;
    value: string;
    label: string;
}

interface MyFormValues {
    category: Category;
    search: string;
}

const initialValues: MyFormValues = {
    category: {
        id: 0,
        value: "Meter ID",
        label: t("Meter ID"),
    },
    search: "",
};

export default initialValues;
