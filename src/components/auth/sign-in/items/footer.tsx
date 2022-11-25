import React from "react";
import { t } from "i18next";
import {
    HaveAccount,
    SignInLink,
    Footer,
} from "../styles";

const ItemFooter: React.FC<any> = () => {
    return (
        <Footer>
            <HaveAccount>
                {t("Don't have an account?")}
                <SignInLink to="/sign-up">{t("Sign up")}</SignInLink>
            </HaveAccount>
        </Footer>
    )
};

export default ItemFooter;
