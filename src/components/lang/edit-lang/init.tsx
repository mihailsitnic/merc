interface MyFormValues {
    value: string;
    label: string;
    icon: string;
}

const initialValues: MyFormValues[] = [
    {
        value: "ru",
        label: "Русский",
        icon: "🇷🇺"
    },
    {
        value: "ro",
        label: "Română",
        icon: "🇲🇩"
    },
    {
        value: "uk",
        label: "Український",
        icon: "🇺🇦"
    },
    {
        value: "en",
        label: "English",
        icon: "🇬🇧"
    },
];

export default initialValues;
