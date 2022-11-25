import React from "react";
import { reset } from "redux/reducer";
import { withRouter } from "react-router-dom";
import { useDispatch } from "react-redux";
import { t } from "i18next";
import data from "./data";
import { Ul, Li, Href, Icon } from "./styles";

const Menu: React.FC<any> = (props) => {
    const { history, isOpen } = props;
    const dispatch = useDispatch();

    const logOut = (item: any) => {
        if (item.title === "Log out") {
            dispatch(reset());
            history.push("/");
        }
    };

    const renderMenu = () => {
        const list = data.map((item) => (
            <Li {...props} key={item.id} state={isOpen}>
                <Href to={item.link} onClick={() => logOut(item)}>
                    <Icon src={item.icon} alt={item.title} />
                    {t(`${item.title}`)}
                </Href>
            </Li>
        ));
        return <Ul>{list}</Ul>;
    };

    return renderMenu();
};

export default withRouter(Menu);
