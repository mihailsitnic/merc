import React from "react";
import { withRouter } from "react-router-dom";
import { t } from "i18next";
import data from "./data";
import { Nav, Ul, Li, A, Span } from "./styles";

const Navigation: React.FC<any> = (props) => {
    const { history, staticContext } = props;
    const path = history.location.pathname;

    const renderNav = () => {
        const list = data.map((item) => {
            const active = item.link === path;
            return (
                <Li key={item.id}>
                    <A
                        {...staticContext}
                        to={item.link}
                        icon={item.icon}
                        $iconActive={item.active}
                        $active={active}
                    >
                        <Span>{t(item.name)}</Span>
                    </A>
                </Li>
            );
        });
        return <Ul>{list}</Ul>;
    };

    return <Nav>{renderNav()}</Nav>;
};

export default withRouter(Navigation);
