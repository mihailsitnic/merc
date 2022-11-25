import React, { useState } from "react";
import { t } from "i18next";
import img from "img";
import {
    Block,
    Input,
    Label,
    PassWrap,
    EyeBtn,
    EyeImg,
    Sup,
} from "../styles";

const ItemPass: React.FC<any> = (props) => {
    const { errors, touched } = props;

    const [showPass, setShowPass] = useState(false);
    const toggleEyeIconPass = () => setShowPass(!showPass);

    return (
        <Block>
            <Label htmlFor="password">{t("New Password")} <Sup>*</Sup></Label>
            <PassWrap>
                <Input
                    id="password"
                    name="password"
                    placeholder={t("min. 8 characters")}
                    type={showPass ? "text" : "password"}
                    validation={
                        errors.password && touched.password
                    }
                />
                <EyeBtn onClick={toggleEyeIconPass}>
                    <EyeImg src={showPass ? img.iconEye : img.iconEyeNo} />
                </EyeBtn>
            </PassWrap>
        </Block>
    )
};

export default ItemPass;
