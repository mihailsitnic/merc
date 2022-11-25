import React from "react";
import { Selector, customStyles } from "./styles";

const Select: React.FC<any> = (props) => {
    const { name, options, defaultValue, sfv, validation, noPadding } = props;

    return (
        <Selector
            {...props}
            options={options}
            styles={customStyles}
            validation={validation}
            noPadding={noPadding}
            defaultValue={{
                id: Math.random(),
                value: defaultValue,
                label: defaultValue,
            }}
            components={{
                DropdownIndicator: () => null,
                IndicatorSeparator: () => null,
            }}
            onChange={(val: any) => sfv(name, val.value)}
        />
    );
};

export default Select;
