import React from "react";
import Button from "components/reusable/button";
import { t } from "i18next";
import { Block } from "../styles";

const ItemSubmit: React.FC<any> = (props) => {
    const { submitting, loader } = props;

    return (
        <Block>
            <Button
                color="blue"
                type="submit"
                active={loader}
                disabled={submitting}
            >
                {t("Enter")}
            </Button>
        </Block>
    );
};

export default ItemSubmit;
