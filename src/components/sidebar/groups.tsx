import React from "react";
import { withRouter } from "react-router-dom";
import { t } from "i18next";
import data from "./group-data";
import { Nav, Ul, Li, Drop, Span } from "./styles";

const Groups: React.FC<any> = (props) => {
    const renderNav = () => {
        const list = data.map((item) => {
            return (
                <Li key={item.id}>
                    <Drop {...props} icon={item.icon}>
                        <Span>{t(item.name)}</Span>
                    </Drop>
                </Li>
            );
        });
        return <Ul>{list}</Ul>;
    };

    return <Nav>{renderNav()}</Nav>;
};

export default withRouter(Groups);
