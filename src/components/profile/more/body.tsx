import React from "react";
import { t } from "i18next";
import Button from "components/reusable/button";
import img from "img";
import {
    Header,
    Body,
    Footer,
    Title,
    CloseBtn,
} from "./styles";

const FormBody: React.FC<any> = (props) => {
    const { row, values, setIsOpen, load } = props;

    return (
        <>
            <Header>
                <Title>
                    {row.name} {t("status")}
                </Title>
                <CloseBtn src={img.iconClose} onClick={() => setIsOpen(false)} />
            </Header>
            <Body>{t("Body")}</Body>
            <Footer>
                <Button type="button" color="grey" onClick={() => setIsOpen(false)}>
                    {t("Cancel")}
                </Button>
                <Button
                    ml
                    color="blue"
                    type="submit"
                    active={load}
                    disabled={!values.status}
                >
                    {t("Change status")}
                </Button>
            </Footer>
        </>
    );
};

export default FormBody;
