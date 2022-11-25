import colors from "theme/colors";

type types = {
    id: number;
    title: string;
    subtitle: string;
    hdlc: string;
    color: string;
    fgColor: string;
};

const data: types[] = [
    {
        id: 70,
        title: "Калараш Бравичи",
        subtitle: "10.111.10.99:1000",
        hdlc: "1552",
        color: colors.blue3,
        fgColor: colors.blue2,
    },
    {
        id: 72,
        title: "Калараш Лозово",
        subtitle: "10.111.10.99:1000",
        hdlc: "2327",
        color: colors.blue3,
        fgColor: colors.blue2,
    },
];

export default data;