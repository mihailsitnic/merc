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
            <Title>{t("Sign in")}</Title>
            <SubTitle>
                {t("Enter your username and password")}
            </SubTitle>
        </Hero>
    )
};

export default ItemHero;
