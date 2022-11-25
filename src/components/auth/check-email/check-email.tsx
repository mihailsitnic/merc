import React from "react";
import { withRouter } from "react-router-dom";
import { Link } from "react-router-dom";
import { t } from "i18next";
import img from "img";
import {
    Section,
    Header,
    Logo,
    Body,
    Title,
    SubTitle,
    ShieldOk,
    SendAgain,
    HaveAccount,
    ContactUsLink,
    Footer,
} from "./styles";

const CheckEmail: React.FC<any> = (props) => {
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
                    <Body>
                        <ShieldOk src={img.iconMail} />
                        <Title>{t("Check your email")}</Title>
                        <SubTitle>
                            {t("Password recovery instructions have been sent to your email")}
                        </SubTitle>
                        <SendAgain onClick={() => { }} to="#">
                            {t("Send again")}
                        </SendAgain>
                    </Body>
                    <Footer>
                        <HaveAccount>
                            {t("Need help?")}
                            <ContactUsLink href="https://t.me/siminel_n" target="_blank">
                                {t("Contact us")}
                            </ContactUsLink>
                        </HaveAccount>
                    </Footer>
                </Section>
            );
        }
        return null;
    };

    return renderState();
};

export default withRouter(CheckEmail);
