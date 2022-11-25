export interface Types {
    [key: string]: any;
}

const initialState: Types = {
    lang: "ru",
    token: "",
    user: {},
    mockData: {
        stationName: "Калараш Бравичи",
        connectionName: "1010",
        connectionDescription: "1010",
        connectionHost: "1010",
        connectionPort: "1010",
        physicalMeterSerial: "1010",
        physicalMeterHDLC: "1010",
        physicalMeterPassword: "1010",
        virtualMeterVoltageCoef: "1010",
        virtualMeterCurrentCoef: "1010",
    },
};

export default initialState;
