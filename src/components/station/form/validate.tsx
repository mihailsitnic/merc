interface MyFormValues {
    stationName: string;
}

const validate = (values: MyFormValues) => {
    let errors: any = {};

    if (!values.stationName) {
        errors.stationName = "Required";
    }

    return errors;
};

export default validate;