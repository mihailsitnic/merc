import React from "react";
import { t } from "i18next";
import {
    HaveAccount,
    SignInLinkArrowRight,
    Footer,
} from "../styles";

const Ads: React.FC<any> = () => {
    return (
        <Footer>
            <HaveAccount>
                {t("Changed your mind about resetting your password?")}
                <SignInLinkArrowRight to="/sign-in">
                    {t("Sign in")}
                </SignInLinkArrowRight>
            </HaveAccount>
        </Footer>
    )
};

export default Ads;
