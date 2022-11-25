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

const initialValues: MyFormValues = {
    stationName: "",
    connectionName: "",
    connectionDescription: "",
    connectionHost: "",
    connectionPort: "",
    physicalMeterSerial: "",
    physicalMeterHDLC: "",
    physicalMeterPassword: "",
    virtualMeterVoltageCoef: "",
    virtualMeterCurrentCoef: "",
};

export default initialValues;