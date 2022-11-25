import { t } from "i18next";

interface MyFormValues {
    password: string;
    confirm: string;
}

const validate = (values: MyFormValues) => {
    let errors: any = {};

    if (
        (!values.password && !values.confirm) ||
        values.password !== values.confirm
    ) {
        errors.password = t("Passwords do not match");
    }

    return errors;
};

export default validate;
