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
                    validation={
                        errors.stationName &&
                        touched.stationName
                    }
                />

                <Inner>
                    <Row>
                        <Col>
                            <Row>
                                <Col {...props} width="sm">
                                    <Label {...props} $pd>
                                        {t("Connection Name")} <Sup>*</Sup>
                                    </Label>
                                    <Wrap>
                                        <Input
                                            name="connectionName"
                                            validation={
                                                errors.connectionName &&
                                                touched.connectionName
                                            }
                                        />
                                    </Wrap>
                                </Col>
                                <Col {...props} width="sm">
                                    <Label {...props} $pd>
                                        {t("Connection Description")} <Sup>*</Sup>
                                    </Label>
                                    <Wrap>
                                        <Input
                                            name="connectionDescription"
                                            validation={
                                                errors.connectionDescription &&
                                                touched.connectionDescription
                                            }
                                        />
                                    </Wrap>
                                </Col>
                            </Row>
                        </Col>
                        <Col>
                            <Row>
                                <Col {...props} width="sm">
                                    <Label {...props} $pd>
                                        {t("Connection Host")} <Sup>*</Sup>
                                    </Label>
                                    <Wrap>
                                        <Input
                                            name="connectionHost"
                                            validation={
                                                errors.connectionHost &&
                                                touched.connectionHost
                                            }
                                        />
                                    </Wrap>
                                </Col>
                                <Col {...props} width="sm">
                                    <Label {...props} $pd>
                                        {t("Connection Port")} <Sup>*</Sup>
                                    </Label>
                                    <Wrap>
                                        <Input
                                            name="connectionPort"
                                            validation={
                                                errors.connectionPort &&
                                                touched.connectionPort
                                            }
                                        />
                                    </Wrap>
                                </Col>
                            </Row>
                        </Col>
                    </Row>
                </Inner>

                <Inner>
                    <Row>
                        <Col>
                            <Row>
                                <Col {...props} width="sm">
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
                                <Col {...props} width="sm">
                                    <Label {...props} $pd>
                                        {t("Physical Meter HDLC")} <Sup>*</Sup>
                                    </Label>
                                    <Wrap>
                                        <Input
                                            name="physicalMeterHDLC"
                                            validation={
                                                errors.physicalMeterHDLC &&
                                                touched.physicalMeterHDLC
                                            }
                                        />
                                    </Wrap>
                                </Col>
                            </Row>
                        </Col>
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
                    {t("Save changes")}
                </Button>
            </Footer>
        </>
    );
};

export default withRouter(Component);