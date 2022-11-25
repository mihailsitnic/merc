import img from "img";

type types = {
    id: number;
    link: string;
    icon: string;
    active: string;
    name: string;
    tags: string[];
};

const data: types[] = [
    {
        id: Math.random(),
        link: "/station",
        icon: img.iconStar,
        active: img.iconStarR,
        name: "Station",
        tags: ["All", "SUPERADMIN", "ADMIN", "USER"],
    },
    {
        id: Math.random(),
        link: "/connection",
        icon: img.iconStar,
        active: img.iconStarR,
        name: "Connection",
        tags: ["All", "SUPERADMIN", "ADMIN", "USER"],
    },
    {
        id: Math.random(),
        link: "/vmeters",
        icon: img.iconStar,
        active: img.iconStarR,
        name: "Virtual Mete",
        tags: ["All", "SUPERADMIN", "ADMIN", "USER"],
    },
    {
        id: Math.random(),
        link: "/pmeter",
        icon: img.iconStar,
        active: img.iconStarR,
        name: "Physical Meter",
        tags: ["All", "SUPERADMIN"],
    },
    {
        id: Math.random(),
        link: "/search",
        icon: img.iconStar,
        active: img.iconStarR,
        name: "Search",
        tags: ["All", "SUPERADMIN", "ADMIN"],
    },
    {
        id: Math.random(),
        link: "/profiles",
        icon: img.iconStar,
        active: img.iconStarR,
        name: "Profiles",
        tags: ["All", "SUPERADMIN", "ADMIN"],
    },
];

export default data;