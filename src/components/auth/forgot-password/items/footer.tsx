import React from "react";
import { t } from "i18next";
import {
    HaveAccount,
    ContactUsLink,
    Footer,
} from "../styles";

const ItemFooter: React.FC<any> = () => {
    return (
        <Footer>
            <HaveAccount>
                {t("Need help?")}
                <ContactUsLink href="https://t.me/siminel_n" target="_blank">
                    {t("Contact us")}
                </ContactUsLink>
            </HaveAccount>
        </Footer>
    )
};

export default ItemFooter;
