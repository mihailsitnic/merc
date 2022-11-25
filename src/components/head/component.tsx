import React from "react";
import { t } from "i18next";
import { Header, Title } from "./styles";

const Head: React.FC<any> = (props) => {
    const { name, id } = props;

    return (
        <Header>
            <Title>{t(name)} {id ? `#${id}` : ""}</Title>
        </Header>
    );
};

export default Head;
