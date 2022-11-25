interface MyFormValues {
    name: string;
    password: string;
}

const validate = (values: MyFormValues) => {
    let errors: any = {};

    if (!values.name) {
        errors.name = "Required";
    }
    if (!values.password) {
        errors.password = "Required";
    }

    return errors;
};

export default validate;
