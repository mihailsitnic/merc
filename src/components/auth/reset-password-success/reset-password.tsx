import React from "react";
import { Link } from "react-router-dom";
import { t } from "i18next";
import img from "img";
import {
    Section,
    Header,
    Logo,
    Article,
    Title,
    SubTitle,
    ShieldOk,
    LoginLink,
    Footer,
} from "./styles";

const ResetPassSuccess: React.FC<any> = (props) => {
    const { view } = props;

    const renderState = () => {
        if (view) {
            return (
                <Section>
                    <Header>
                        <Link to="/sign-in">
                            <Logo src={img.logo} />
                        </Link>
                    </Header>

                    <Article>
                        <ShieldOk src={img.iconShieldOk} />
                        <Title>{t("Password reset successfully")}</Title>
                        <SubTitle>{t("You can now sign in again")}</SubTitle>
                    </Article>

                    <Footer>
                        <LoginLink to="/sign-in">{t("Sign in")}</LoginLink>
                    </Footer>
                </Section>
            );
        }
        return null;
    };

    return renderState();
};

export default ResetPassSuccess;
