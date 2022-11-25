import React, { useState } from "react";
import { ErrorMessage } from "formik";
import { t } from "i18next";
import img from "img";
import {
    Block,
    Input,
    Label,
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
            <Label htmlFor="password">{t("Password")} <Sup>*</Sup></Label>
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
            <Error>
                <ErrorMessage name="password" />
            </Error>
        </Block>
    )
};

export default ItemPass;
