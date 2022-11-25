interface MyFormValues {
    name: string;
    password: string;
    checkbox: boolean;
}

const initialValues: MyFormValues = {
    name: "",
    password: "",
    checkbox: false,
};

export default initialValues;