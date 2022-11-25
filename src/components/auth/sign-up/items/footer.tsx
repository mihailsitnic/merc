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
                {t("Already have an account?")}
                <SignInLink to="/sign-in">{t("Sign in")}</SignInLink>
            </HaveAccount>
        </Footer>
    )
};

export default ItemFooter;
