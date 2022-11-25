interface MyFormValues {
    connectionName: string;
    connectionDescription: string;
    connectionHost: string;
    connectionPort: string;
}

const validate = (values: MyFormValues) => {
    let errors: any = {};

    if (!values.connectionName) {
        errors.connectionName = "Required";
    }
    if (!values.connectionDescription) {
        errors.connectionDescription = "Required";
    }
    if (!values.connectionHost) {
        errors.connectionHost = "Required";
    }
    if (!values.connectionPort) {
        errors.connectionPort = "Required";
    }

    return errors;
};

export default validate;