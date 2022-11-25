import React from "react";
import { t } from "i18next";
import {
    Block,
    Input,
    Label,
    Sup,
} from "../styles";

const ItemEmail: React.FC<any> = (props) => {
    const { errors, touched } = props;

    return (
        <Block>
            <Label htmlFor="email">{t("Email")} <Sup>*</Sup></Label>
            <Input
                id="email"
                type="email"
                name="email"
                validation={errors.email && touched.email}
            />
        </Block>
    )
};

export default ItemEmail;
