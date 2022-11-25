import React from "react";
import { useHistory } from "react-router-dom";
import { t } from "i18next";
import img from "img";
import {
    Hero,
    Title,
    LinkBack,
    ArrowBack,
    SubTitle,
} from "../styles";

const ItemHero: React.FC<any> = () => {
    const history = useHistory();

    return (
        <Hero>
            <Title>
                <LinkBack onClick={() => history.goBack()}>
                    <ArrowBack src={img.iconArrowLeft} />
                </LinkBack>
                {t("Forgot your password?")}
                <div />
            </Title>
            <SubTitle>{t("Enter your account email")}</SubTitle>
        </Hero>
    )
};

export default ItemHero;
