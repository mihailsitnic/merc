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
                            <Label {...props} $pd>
                                {t("Physical Meter Serial")} <Sup>*</Sup>
                            </Label>
                            <Wrap>
                                <Input
                                    name="physicalMeterSerial"
                                    validation={
                                        errors.physicalMeterSerial &&
                                        touched.physicalMeterSerial
                                    }
                                />
                            </Wrap>
                        </Col>
                        <Col>
                            <Label {...props} $pd>
                                {t("Physical Meter HDLC")} <Sup>*</Sup>
                            </Label>
                            <Wrap>
                                <Input
                                    name="physicalMeterHDLC"
                                    validation={
                                        errors.physicalMeterHDLC && touched.physicalMeterHDLC
                                    }
                                />
                            </Wrap>
                        </Col>
                    </Row>
                </Inner>

                <Inner>
                    <Row>
                        <Col>
                            <Label {...props} $pd>
                                {t("Physical Meter Password")} <Sup>*</Sup>
                            </Label>
                            <Wrap>
                                <Input
                                    name="physicalMeterPassword"
                                    validation={
                                        errors.physicalMeterPassword &&
                                        touched.physicalMeterPassword
                                    }
                                />
                            </Wrap>
                        </Col>
                    </Row>
                </Inner>
            </Section>
            <Footer>
                <Button auto color="blue" active={isSubmitting} type="submit">
                    {t("Add meter")}
                </Button>
            </Footer>
        </>
    );
};

export default withRouter(Component);
