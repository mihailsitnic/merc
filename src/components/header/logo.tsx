import React from "react";
import { t } from "i18next";
import { withRouter } from "react-router-dom";
import img from "img";
import {
    Logo,
    Img,
    Back,
    Title
} from "./styles";

const Component: React.FC<any> = (props) => {
    const { history, location } = props;
    const isGroup = location.pathname.startsWith("/group");

    const renderState = () => {
        if (isGroup) {
            return (
                <Logo to="#" onClick={() => history.goBack()}>
                    <Back src={img.iconArrowLeft} alt="back" />
                    <Title>{t("Go Back")}</Title>
                </Logo>
            );
        }
        return (
            <Logo to="/">
                <Img src={img.logo} alt="logo" />
            </Logo>
        );
    };

    return renderState();
};

export default withRouter(Component);
