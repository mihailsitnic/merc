import img from "img";

type types = {
    id: number;
    title: string;
    link: string;
    icon: string;
    tags: string[];
};

const data: types[] = [
    {
        id: Math.random(),
        title: "Station",
        link: "/station",
        icon: img.iconStar,
        tags: ["All", "SUPERADMIN", "ADMIN", "USER"],
    },
    {
        id: Math.random(),
        title: "Connection",
        link: "/connection",
        icon: img.iconStar,
        tags: ["All", "SUPERADMIN", "ADMIN", "USER"],
    },
    {
        id: Math.random(),
        title: "Virtual Meters",
        link: "/vmeters",
        icon: img.iconStar,
        tags: ["All", "SUPERADMIN", "ADMIN", "USER"],
    },
    {
        id: Math.random(),
        title: "Physical Meter",
        link: "/pmeter",
        icon: img.iconStar,
        tags: ["All", "SUPERADMIN", "ADMIN", "USER"],
    },
    {
        id: Math.random(),
        title: "Search",
        link: "/search",
        icon: img.iconStar,
        tags: ["All", "SUPERADMIN"],
    },
    {
        id: Math.random(),
        title: "Language selection",
        link: "/lang",
        icon: img.iconStar,
        tags: ["All", "SUPERADMIN", "ADMIN", "USER"],
    },
    {
        id: Math.random(),
        title: "Log out",
        link: "/sign-in",
        icon: img.iconLogout,
        tags: ["All", "SUPERADMIN"],
    },
];

export default data;

