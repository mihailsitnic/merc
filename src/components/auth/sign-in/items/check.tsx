import React from "react";
import { t } from "i18next";
import {
    Block,
    Remember,
    CheckboxInput,
    CheckboxLabel,
    Checkmark,
    CheckLabel,
    ForgotPassword,
} from "../styles";

const ItemCheck: React.FC<any> = () => {
    return (
        <Block>
            <Remember>
                <CheckboxLabel htmlFor="checkbox">
                    <CheckboxInput
                        id="checkbox"
                        type="checkbox"
                        name="checkbox"
                    />
                    <Checkmark className="checkmark" />
                    <CheckLabel>{t("Remember me")}</CheckLabel>
                </CheckboxLabel>
                <ForgotPassword to="/forgot-password">
                    {t("Forgot your password?")}
                </ForgotPassword>
            </Remember>
        </Block>
    )
};

export default ItemCheck;
