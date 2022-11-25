import React from "react";
import { t } from "i18next";
import Button from "components/reusable/button";
import { Block } from "../styles";

const ItemSubmit: React.FC<any> = (props) => {
    const { loader, submitting } = props;
    return (
        <Block>
            <Button color="blue" type="submit" actve={loader} disabled={submitting}>
                {t("Register")}
            </Button>
        </Block>
    );
};

export default ItemSubmit;
