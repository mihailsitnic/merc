import React from "react";
import Button from "components/reusable/button";
import { Block } from "../styles";
import { t } from "i18next";

const Ads: React.FC<any> = (props) => {
    const { loader, submitting } = props;

    return (
        <Block>
            <Button
                color="blue"
                actve={loader}
                disabled={submitting}
                type="submit"
            >
                {t("Reset the password")}
            </Button>
        </Block>
    );
};

export default Ads;
