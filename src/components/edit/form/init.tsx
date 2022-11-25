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

const init: MyFormValues = {
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

const initialValues = (data: any) => {
    return {
        stationName: data.stationName || init.stationName,
        connectionName: data.connectionName || init.connectionName,
        connectionDescription: data.connectionDescription || init.connectionDescription,
        connectionHost: data.connectionHost || init.connectionHost,
        connectionPort: data.connectionPort || init.connectionPort,
        physicalMeterSerial: data.physicalMeterSerial || init.physicalMeterSerial,
        physicalMeterHDLC: data.physicalMeterHDLC || init.physicalMeterHDLC,
        physicalMeterPassword: data.physicalMeterPassword || init.physicalMeterPassword,
        virtualMeterVoltageCoef: data.virtualMeterVoltageCoef || init.virtualMeterVoltageCoef,
        virtualMeterCurrentCoef: data.virtualMeterCurrentCoef || init.virtualMeterCurrentCoef,
    };
};

export default initialValues;