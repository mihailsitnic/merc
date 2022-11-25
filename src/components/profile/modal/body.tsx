import React, { useState } from "react";
import { t } from "i18next";
import Button from "components/reusable/button";
import SelectDate from "components/reusable/select-date";
import img from "img";
import { Header, Body, Footer, Title, Name, CloseBtn } from "./styles";

const FormBody: React.FC<any> = (props) => {
    const { sfv, setIsOpen, load, values } = props;
    const [val, setVal] = useState<any>(new Date());

    return (
        <>
            <Header>
                <Title>
                    {t("Date")}
                </Title>
                <CloseBtn src={img.iconClose} onClick={() => setIsOpen(false)} />
            </Header>
            <Body>
                <Name>{t("New date")}</Name>
                <SelectDate sfv={sfv} name="date" val={values.date} />

            </Body>
            <Footer>
                <Button auto type="button" color="grey" onClick={() => setIsOpen(false)}>
                    {t("Cancel")}
                </Button>
                <Button
                    ml
                    auto
                    color="blue"
                    type="submit"
                    active={load}
                    disabled={!values.status}
                >
                    {t("Change date")}
                </Button>
            </Footer>
        </>
    );
};

export default FormBody;
