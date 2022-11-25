import React from "react";
import data from "./data";
import { t } from "i18next";
import { ReactSelect, customStyles } from "../styles";

const Select: React.FC<any> = (props) => {
    const { sfv, id } = props;

    const setCategory = (val: any) => {
        sfv("category", val);
        id(val.id);
    };

    return (
        <ReactSelect
            options={data()}
            styles={customStyles}
            defaultValue={{
                id: 0,
                value: t("Meter ID"),
                label: t("Meter ID"),
            }}
            onChange={(val: any) => setCategory(val)}
            components={{
                DropdownIndicator: () => null,
                IndicatorSeparator: () => null,
            }}
        />
    );
};

export default Select;
