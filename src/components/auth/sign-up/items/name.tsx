import React from "react";
import { t } from "i18next";
import { Row, Col, Input, Label, Block, Sup } from "../styles";

const ItemName: React.FC<any> = (props) => {
    const { errors, touched } = props;

    return (
        <Block>
            <Row>
                <Col>
                    <Label htmlFor="firstName">
                        {t("First name")} <Sup>*</Sup>
                    </Label>
                    <Input
                        id="firstName"
                        type="text"
                        name="firstName"
                        validation={errors.firstName && touched.firstName}
                    />
                </Col>
                <Col>
                    <Label htmlFor="lastName">
                        {t("Last name")} <Sup>*</Sup>
                    </Label>
                    <Input
                        id="lastName"
                        type="text"
                        name="lastName"
                        validation={errors.lastName && touched.lastName}
                    />
                </Col>
            </Row>
        </Block>
    );
};

export default ItemName;
