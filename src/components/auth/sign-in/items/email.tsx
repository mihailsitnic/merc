import React from "react";
import { t } from "i18next";
import { Block, Input, Label, Sup } from "../styles";

const ItemName: React.FC<any> = (props) => {
    const { errors, touched } = props;

    return (
        <Block>
            <Label htmlFor="name">{t("Name")} <Sup>*</Sup></Label>
            <Input
                id="name"
                type="name"
                name="name"
                validation={errors.name && touched.name}
            />
        </Block>
    );
};

export default ItemName;
