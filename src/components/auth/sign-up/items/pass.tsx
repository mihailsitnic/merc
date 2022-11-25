import React, { useState } from "react";
import { ErrorMessage } from "formik";
import { t } from "i18next";
import img from "img";
import {
    Row,
    Col,
    Input,
    Label,
    Block,
    PassWrap,
    EyeBtn,
    EyeImg,
    Error,
    Sup,
} from "../styles";

const ItemPass: React.FC<any> = (props) => {
    const { errors, touched } = props;

    const [showPass, setShowPass] = useState(false);
    const toggleEyeIcon = () => setShowPass(!showPass);

    return (
        <Block>
            <Row>
                <Col>
                    <Label htmlFor="password">
                        {t("Password")} <Sup>*</Sup>
                    </Label>
                    <PassWrap>
                        <Input
                            id="password"
                            type={showPass ? "text" : "password"}
                            name="password"
                            validation={errors.password && touched.password}
                        />
                        <EyeBtn onClick={toggleEyeIcon}>
                            <EyeImg src={showPass ? img.iconEye : img.iconEyeNo} />
                        </EyeBtn>
                    </PassWrap>
                </Col>
                <Col>
                    <Label htmlFor="confirmPassword">
                        {t("Confirm password")} <Sup>*</Sup>
                    </Label>
                    <PassWrap>
                        <Input
                            id="confirmPassword"
                            type={showPass ? "text" : "password"}
                            name="confirmPassword"
                            validation={errors.password && touched.password}
                        />
                        <EyeBtn onClick={toggleEyeIcon}>
                            <EyeImg src={showPass ? img.iconEye : img.iconEyeNo} />
                        </EyeBtn>
                    </PassWrap>
                </Col>
            </Row>
            <Error>
                <ErrorMessage name="password" />
            </Error>
        </Block>
    );
};

export default ItemPass;
