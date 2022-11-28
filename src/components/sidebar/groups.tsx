import React, { useState } from "react";
import { withRouter } from "react-router-dom";
import { t } from "i18next";
import truncate from "components/reusable/truncate";
import data from "./data";
import {
    Nav,
    Ul,
    Li,
    Drop,
    Span,
    GroupList,
    GroupLi,
    GroupLink,
} from "./styles";

const Groups: React.FC<any> = (props) => {
    const [active, setActive] = useState<number>(0);

    const handleClick = (id: number) => {
        if (active === id) {
            return setActive(0);
        }
        setActive(id);
    };

    const renderGroups = (item: any) => {
        const list = item.list;
        const a = item.id === active;
        if (!list || !a) return null;

        return (
            <GroupList>
                {list.map((item: any) => (
                    <GroupLi key={item.id}>
                        <GroupLink to={`/group/${item.id}`} title={item.name}>
                            {truncate(item.name, 25)}
                        </GroupLink>
                    </GroupLi>
                ))}
            </GroupList>
        );
    };

    const renderNav = () => {
        const list = data.groups.map((item) => {
            const a = item.id === active;
            return (
                <Li key={item.id}>
                    <Drop
                        {...props}
                        icon={a ? item.icon2 : item.icon}
                        onClick={() => handleClick(item.id)}
                    >
                        <Span>{t(item.name)}</Span>
                    </Drop>
                    {renderGroups(item)}
                </Li>
            );
        });
        return <Ul>{list}</Ul>;
    };

    return <Nav>{renderNav()}</Nav>;
};

export default withRouter(Groups);
