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

const ItemConfirm: React.FC<any> = (props) => {
    const { errors, touched } = props;

    const [showConfirm, setShowConfirm] = useState(false);
    const toggleEyeIconConfirm = () => setShowConfirm(!showConfirm);

    return (
        <Block>
            <Label htmlFor="confirm">{t("Confirm new password")} <Sup>*</Sup></Label>
            <PassWrap>
                <Input
                    id="confirm"
                    name="confirm"
                    type={showConfirm ? "text" : "password"}
                    validation={
                        errors.confirm && touched.confirm
                    }
                />
                <EyeBtn onClick={toggleEyeIconConfirm}>
                    <EyeImg src={showConfirm ? img.iconEye : img.iconEyeNo} />
                </EyeBtn>
            </PassWrap>
            <Error>
                <ErrorMessage name="password" />
            </Error>
        </Block>
    )
};

export default ItemConfirm;
