import React from "react";
import { t } from "i18next";
import { withRouter } from "react-router-dom";
import Button from "components/reusable/button";
import {
    Section,
    Name,
    Inner,
    Label,
    Row,
    Col,
    Wrap,
    Input,
    Sup,
    Footer,
} from "./styles";

const Component: React.FC<any> = (props) => {
    const { errors, touched, isSubmitting } = props;

    return (
        <>
            <Section>
                <Name>
                    {t("Station name")} <Sup>*</Sup>
                </Name>
                <Input
                    name="stationName"
                    validation={errors.stationName && touched.stationName}
                />
            </Section>
            <Footer>
                <Button auto color="blue" active={isSubmitting} type="submit">
                    {t("Add Station")}
                </Button>
            </Footer>
        </>
    );
};

export default withRouter(Component);
