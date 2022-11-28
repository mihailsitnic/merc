import React from "react";
import { useAppSelector } from "redux/hooks";
import { t } from "i18next";
import PopUp from "components/reusable/pop-up";
import { Section, Title, Inner, Value, Label, Row, Col } from "./styles";

const Details: React.FC<any> = (props) => {
    const data = useAppSelector((state) => state.mockData);

    return (
        <Section>
            <PopUp />
            <Title>{data.stationName}</Title>
            <Inner>
                <Row>
                    <Col>
                        <Row>
                            <Col {...props} width="sm">
                                <Label {...props} $pd>
                                    {t("Connection Name")}
                                </Label>
                                <Value>{data.connectionName}</Value>
                            </Col>
                            <Col {...props} width="sm">
                                <Label {...props} $pd>
                                    {t("Connection Description")}
                                </Label>
                                <Value>{data.connectionDescription}</Value>
                            </Col>
                        </Row>
                    </Col>
                    <Col>
                        <Row>
                            <Col {...props} width="sm">
                                <Label {...props} $pd>
                                    {t("Connection Host")}
                                </Label>
                                <Value>{data.connectionHost}</Value>
                            </Col>
                            <Col {...props} width="sm">
                                <Label {...props} $pd>
                                    {t("Connection Port")}
                                </Label>
                                <Value>{data.connectionPort}</Value>
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
                                    {t("Physical Meter Serial")}
                                </Label>
                                <Value>{data.physicalMeterSerial}</Value>
                            </Col>
                            <Col {...props} width="sm">
                                <Label {...props} $pd>
                                    {t("Physical Meter HDLC")}
                                </Label>
                                <Value>{data.physicalMeterHDLC}</Value>
                            </Col>
                        </Row>
                    </Col>
                    <Col>
                        <Row>
                            <Col {...props} width="sm">
                                <Label {...props} $pd>
                                    {t("Physical Meter Password")}
                                </Label>
                                <Value>{data.physicalMeterPassword}</Value>
                            </Col>
                            <Col {...props} width="sm">
                                <Label {...props} $pd>
                                    {t("Station Name")}
                                </Label>
                                <Value>{data.stationName}</Value>
                            </Col>
                        </Row>

                    </Col>
                </Row>
            </Inner>

            <Inner>
                <Row>
                    <Col>
                        <Label>{t("Virtual Meter Voltage Coef")}</Label>
                        <Value>{data.virtualMeterVoltageCoef}</Value>
                    </Col>
                    <Col>
                        <Label>{t("Virtual Meter Current Coef")}</Label>
                        <Value>{data.virtualMeterCurrentCoef}</Value>
                    </Col>
                </Row>
            </Inner>
        </Section>
    );
};

export default Details;
