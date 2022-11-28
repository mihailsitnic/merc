import Actions from "./actions";
import { t } from "i18next";

const сolumns = [
    {
        name: t("AD- / MW"),
        width: "100px",
        sortable: true,
        selector: (row: any) => row.adM,
    },
    {
        name: t("AD+ / MW"),
        width: "100px",
        sortable: true,
        selector: (row: any) => row.adP,
    },
    {
        name: t("AEC- / kWh"),
        width: "100px",
        sortable: true,
        selector: (row: any) => row.aecM,
    },
    {
        name: t("AEC+ / kWh"),
        width: "100px",
        sortable: true,
        selector: (row: any) => row.aecP,
    },
    {
        name: t("Iph1 / A"),
        width: "100px",
        sortable: true,
        selector: (row: any) => row.iph1,
    },
    {
        name: t("Iph2 / A"),
        width: "100px",
        sortable: true,
        selector: (row: any) => row.iph2,
    },
    {
        name: t("Iph3 / A"),
        width: "100px",
        sortable: true,
        selector: (row: any) => row.iph3,
    },
    {
        name: t("RcD- / Mvar"),
        width: "100px",
        sortable: true,
        selector: (row: any) => row.rcdM,
    },
    {
        name: t("RcD+ / Mvar"),
        width: "100px",
        sortable: true,
        selector: (row: any) => row.rcdP,
    },
    {
        name: t("RiD- / Mvar"),
        width: "100px",
        sortable: true,
        selector: (row: any) => row.ridM,
    },
    {
        name: t("RiD+ / Mvar"),
        width: "100px",
        sortable: true,
        selector: (row: any) => row.ridP,
    },
    {
        name: t("Vph1 / kV"),
        width: "100px",
        sortable: true,
        selector: (row: any) => row.vph1,
    },
    {
        name: t("Vph2 / kV"),
        width: "100px",
        sortable: true,
        selector: (row: any) => row.vph2,
    },
    {
        name: t("Vph3 / kV"),
        width: "100px",
        sortable: true,
        selector: (row: any) => row.vph3,
    },
    {
        name: t("Actions"),
        width: "100px",
        sortable: true,
        cell: (row: any) => <Actions row={row} />,
        selector: (row: any) => row.actions,
    },
];

export default сolumns;
