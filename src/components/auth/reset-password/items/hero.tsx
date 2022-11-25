import React from "react";
import { t } from "i18next";
import {
    Hero,
    Title,
    SubTitle,
} from "../styles";

const ItemHero: React.FC<any> = () => {
    return (
        <Hero>
            <Title>{t("Password reset")}</Title>
            <SubTitle>
                {t("Set a new password for your account")}
            </SubTitle>
        </Hero>
    )
};

export default ItemHero;
