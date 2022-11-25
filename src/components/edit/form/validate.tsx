interface MyFormValues {
    stationName: string;
    connectionName: string;
    connectionDescription: string;
    connectionHost: string;
    connectionPort: string;
    physicalMeterSerial: string;
    physicalMeterHDLC: string;
    physicalMeterPassword: string;
    virtualMeterVoltageCoef: string;
    virtualMeterCurrentCoef: string;
}

const validate = (values: MyFormValues) => {
    let errors: any = {};

    if (!values.stationName) {
        errors.stationName = "Required";
    }
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
    if (!values.physicalMeterSerial) {
        errors.physicalMeterSerial = "Required";
    }
    if (!values.physicalMeterHDLC) {
        errors.physicalMeterHDLC = "Required";
    }
    if (!values.physicalMeterPassword) {
        errors.physicalMeterPassword = "Required";
    }
    if (!values.virtualMeterVoltageCoef) {
        errors.virtualMeterVoltageCoef = "Required";
    }
    if (!values.virtualMeterCurrentCoef) {
        errors.virtualMeterCurrentCoef = "Required";
    }

    return errors;
};

export default validate;