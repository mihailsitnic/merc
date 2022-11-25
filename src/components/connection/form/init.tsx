interface MyFormValues {
    connectionName: string;
    connectionDescription: string;
    connectionHost: string;
    connectionPort: string;
}

const initialValues: MyFormValues = {
    connectionName: "",
    connectionDescription: "",
    connectionHost: "",
    connectionPort: "",
};

export default initialValues;