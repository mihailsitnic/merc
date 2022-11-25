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
                                {t("Connection Name")} <Sup>*</Sup>
                            </Label>
                            <Wrap>
                                <Input
                                    name="connectionName"
                                    validation={
                                        errors.connectionName && touched.connectionName
                                    }
                                />
                            </Wrap>
                        </Col>
                        <Col>
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
                </Inner>

                <Inner>
                    <Row>
                        <Col>
                            <Label {...props} $pd>
                                {t("Connection Host")} <Sup>*</Sup>
                            </Label>
                            <Wrap>
                                <Input
                                    name="connectionHost"
                                    validation={
                                        errors.connectionHost && touched.connectionHost
                                    }
                                />
                            </Wrap>
                        </Col>
                        <Col>
                            <Label {...props} $pd>
                                {t("Connection Port")} <Sup>*</Sup>
                            </Label>
                            <Wrap>
                                <Input
                                    name="connectionPort"
                                    validation={
                                        errors.connectionPort && touched.connectionPort
                                    }
                                />
                            </Wrap>
                        </Col>
                    </Row>
                </Inner>
            </Section>
            <Footer>
                <Button auto color="blue" active={isSubmitting} type="submit">
                    {t("Add connection")}
                </Button>
            </Footer>
        </>
    );
};

export default withRouter(Component);
