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
            <Title>{t("Sign up")}</Title>
            <SubTitle>
                {t("Enter information about yourself")}
            </SubTitle>
        </Hero>
    )
};

export default ItemHero;
