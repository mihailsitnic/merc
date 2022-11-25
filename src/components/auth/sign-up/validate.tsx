import { t } from "i18next";

interface MyFormValues {
    firstName: string;
    lastName: string;
    email: string;
    password: string;
    confirmPassword: string;
    gender: string;
    age: number;
}

const validate = (values: MyFormValues) => {
    let errors: any = {};

    if (!values.firstName) {
        errors.firstName = t("Required");
    }
    if (!values.lastName) {
        errors.lastName = t("Required");
    }
    if (!values.email) {
        errors.email = t("Required");
    } else if (
        !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)
    ) {
        errors.email = t("Invalid email address")
    }
    if (!values.password && !values.confirmPassword) {
        errors.password = t("Passwords do not match");
    }
    if (values.password !== values.confirmPassword) {
        errors.password = t("Passwords do not match");
    }
    if (!values.gender) {
        errors.gender = t("Required");
    }
    if (!values.age) {
        errors.age = t("Required");
    }

    return errors;
};

export default validate;