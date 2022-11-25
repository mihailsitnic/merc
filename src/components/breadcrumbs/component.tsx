import React from "react";
import img from "img";
import { t } from "i18next";
import { Ul, Li, A, HomeIcon } from "./styles";

const Breadcrumbs: React.FC<any> = (props) => {
    const { name, } = props;

    return (
        <Ul>
            <Li>
                <A to="/">
                    <HomeIcon src={img.iconHome} />
                </A>
            </Li>
            <Li>
                <A to="#">{t(name)}</A>
            </Li>
        </Ul>
    );
};

export default Breadcrumbs;