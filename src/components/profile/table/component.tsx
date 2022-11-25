import React, { useState, useMemo } from "react";
import { filterData } from "../search/filter";
import { t } from "i18next";
import DataTable from "react-data-table-component";
import сolumns from "./columns";
import Search from "../search";
import MData from "./data";
import img from "img";
import {
    Section,
    Thead,
    Arrow,
    Flex,
    Name,
    NoData,
} from "./styles";

const Table: React.FC<any> = (props) => {
    const [search, setSearch] = useState<string>("");

    const data = MData();

    const filteredData = useMemo(
        () => filterData(data, search),
        [search]
    );

    return (
        <Section>
            <Thead>
                <Flex>
                    <Name>{t("CES / Anenii_Noi 110VL Causheni_lp")}</Name>
                </Flex>
                <Flex>
                    <Search search={(e: string) => setSearch(String(e))} />
                </Flex>
            </Thead>

            <DataTable
                {...props}
                columns={сolumns}
                data={filteredData}
                sortIcon={<Arrow src={img.iconArrowSort} />}
                noDataComponent={<NoData src={img.kzp7} />}
                pagination
            />
        </Section>
    );
};

export default Table;
