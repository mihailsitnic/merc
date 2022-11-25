import React from "react";
import { t } from "i18next";
import DatePicker, { registerLocale } from "react-datepicker";
import ru from "date-fns/locale/ru";
import { Select } from "./styles";

const SelectDate: React.FC<any> = (props) => {
    const { name, val, sfv } = props;

    registerLocale("ru", ru);

    return (
        <Select>
            <DatePicker
                {...props}
                onChange={(date: any) => sfv(name, new Date(date.getTime()))}
                startDate={val}
                selected={val}
                minDate={new Date()}
                dateFormat="dd.MM.yyyy / h:mm"
                locale="ru"
                placeholderText={t("Select date")}
                autoComplete="off"
            />
        </Select>
    );
};

export default SelectDate;
