interface MyFormValues {
    virtualMeterVoltageCoef: string;
    virtualMeterCurrentCoef: string;
}

const validate = (values: MyFormValues) => {
    let errors: any = {};

    if (!values.virtualMeterVoltageCoef) {
        errors.virtualMeterVoltageCoef = "Required";
    }
    if (!values.virtualMeterCurrentCoef) {
        errors.virtualMeterCurrentCoef = "Required";
    }

    return errors;
};

export default validate;