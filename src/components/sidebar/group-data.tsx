import img from "img";

type types = {
    id: number;
    icon: string;
    name: string;
};

const data: types[] = [
    {
        id: Math.random(),
        icon: img.iconGroupsBlue,
        name: "CES",
    },
    {
        id: Math.random(),
        icon: img.iconGroupsOrange,
        name: "DE",
    },
    {
        id: Math.random(),
        icon: img.iconGroupsPink,
        name: "SES",
    },
    {
        id: Math.random(),
        icon: img.iconGroupsPurple,
        name: "SZES",
    },
    {
        id: Math.random(),
        icon: img.iconGroupsPink,
        name: "UES",
    },
    {
        id: Math.random(),
        icon: img.iconGroupsOrange,
        name: "UKRAINA",
    },
];

export default data;