import img from "img";

type group = {
    id: number;
    icon: string;
    icon2: string;
    name: string;
    list?: any[];
};

type types = {
    id: number;
    link: string;
    icon: string;
    active: string;
    name: string;
    tags: string[];
};

const nav: types[] = [
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
    }
];

const groups: group[] = [
    {
        id: Math.random(),
        icon: img.iconGroupsBlue,
        icon2: img.iconGroupsBlueActive,
        name: "CES",
        list: [
            {
                id: Math.random(),
                name: "Anenii_Noi 110VL Causheni_lp",
            },
            {
                id: Math.random(),
                name: "Anenii_Noi_10V1T_lp",
            },
            {
                id: Math.random(),
                name: "Anenii_Noi_10V2T_lp",
            },
            {
                id: Math.random(),
                name: "Benderi_Sud_35VL_Hadjimus_lp",
            },
            {
                id: Math.random(),
                name: "Benderi_Sud_110VL_Ursoia_lp",
            },
            {
                id: Math.random(),
                name: "Bolduresti_10V2T_lp",
            },
            {
                id: Math.random(),
                name: "Brinzenii_Noi_10V2T_lp",
            },
            {
                id: Math.random(),
                name: "Brinzenii_Noi_35VL_Telenesti_lp",
            },
            {
                id: Math.random(),
                name: "Calarasi_35VL_Bravicea_lp",
            },
            {
                id: Math.random(),
                name: "Carpineni_35VL_Crasnoarmeisk_lp",
            },
        ],
    },
    {
        id: Math.random(),
        icon: img.iconGroupsOrange,
        icon2: img.iconGroupsOrangeActive,
        name: "DE",
        list: [
            {
                id: Math.random(),
                name: "Benderi_Sud_35VL_Hadjimus_lp",
            },
            {
                id: Math.random(),
                name: "Benderi_Sud_110VL_Ursoia_lp",
            },
            {
                id: Math.random(),
                name: "Dubossary_35VL_Golerkani_lp",
            },
            {
                id: Math.random(),
                name: "Grigoriopol_35VL_Koshnitsa_lp",
            },
            {
                id: Math.random(),
                name: "Jilposelok_35VL_Ciorna_lp",
            },
            {
                id: Math.random(),
                name: "Kamenka_35VL_Kugureshti",
            },
            {
                id: Math.random(),
                name: "MGRES_110VL_Chiobruci_1_lp",
            },
            {
                id: Math.random(),
                name: "MGRES_330VL_Kishinev_1_lp",
            },
            {
                id: Math.random(),
                name: "MGRES_400VL_Vulkaneshti400_lp",
            },
            {
                id: Math.random(),
                name: "Proteagailovka_TSP_1_lp",
            },
        ],
    },
    {
        id: Math.random(),
        icon: img.iconGroupsPink,
        icon2: img.iconGroupsPinkActive,
        name: "SES",
    },
    {
        id: Math.random(),
        icon: img.iconGroupsPurple,
        icon2: img.iconGroupsPurpleActive,
        name: "SZES",
    },
    {
        id: Math.random(),
        icon: img.iconGroupsPink,
        icon2: img.iconGroupsPinkActive,
        name: "UES",
    },
    {
        id: Math.random(),
        icon: img.iconGroupsOrange,
        icon2: img.iconGroupsOrangeActive,
        name: "UKRAINA",
    },
];

const data = {
    nav,
    groups,
}

export default data;