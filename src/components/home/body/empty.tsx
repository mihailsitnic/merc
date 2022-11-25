import React from "react";
import { t } from "i18next";
import img from "img";
import { Section, Icon, EmptyTitle, EmptySubtitle } from "./styles";

const Empty: React.FC<any> = () => {
    return (
        <Section>
            <Icon src={img.iconSearch} alt="icon" />
            <EmptyTitle>{t("Searching results")}</EmptyTitle>
            <EmptySubtitle>
                {t("Enter station name or meter ID")}
            </EmptySubtitle>
        </Section>
    );
};

export default Empty;
