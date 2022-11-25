import React from "react";
import { t } from "i18next";
import { withRouter } from "react-router-dom";
import Button from "components/reusable/button";
import {
    Section,
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
                <Inner>
                    <Row>
                        <Col>
                            <Label>
                                {t("Virtual Meter Voltage Coef")} <Sup>*</Sup>
                            </Label>
                            <Wrap>
                                <Input
                                    name="virtualMeterVoltageCoef"
                                    validation={
                                        errors.virtualMeterVoltageCoef &&
                                        touched.virtualMeterVoltageCoef
                                    }
                                />
                            </Wrap>
                        </Col>
                        <Col>
                            <Label>
                                {t("Virtual Meter Current Coef")} <Sup>*</Sup>
                            </Label>
                            <Wrap>
                                <Input
                                    name="virtualMeterCurrentCoef"
                                    validation={
                                        errors.virtualMeterCurrentCoef &&
                                        touched.virtualMeterCurrentCoef
                                    }
                                />
                            </Wrap>
                        </Col>
                    </Row>
                </Inner>
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
