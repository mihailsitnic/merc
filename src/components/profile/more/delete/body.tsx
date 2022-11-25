import React from "react";
import Button from "components/reusable/button";
import { t } from "i18next";
import img from "img";
import {
    ModalHeader,
    ModalBody,
    ModalDescription,
    ModalFooter,
    ModalTitle,
    ModalCloseBtn,
    Bold,
} from "./styles";

const Body: React.FC<any> = (props) => {
    const { row, setIsOpen, load } = props;

    return (
        <>
            <ModalHeader>
                <ModalTitle>{t("Are you sure?")}</ModalTitle>
                <ModalCloseBtn src={img.iconClose} onClick={() => setIsOpen(false)} />
            </ModalHeader>
            <ModalBody>
                <ModalDescription>
                    {t("All data related to")}{" "}
                    <Bold>{"X"}</Bold>
                    {" "}{t("will be irretrievably lost.")}
                </ModalDescription>
            </ModalBody>
            <ModalFooter>
                <Button auto type="button" color="grey" onClick={() => setIsOpen(false)}>
                    {t("Cancel")}
                </Button>
                <Button ml auto color="blue" type="submit" active={load}>
                    {t("Delete")}
                </Button>
            </ModalFooter>
        </>
    );
};

export default Body;
