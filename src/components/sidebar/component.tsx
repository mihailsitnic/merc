import React from "react";
import { withRouter } from "react-router-dom";
import { t } from "i18next";
import Navigation from "./nav";
import Groups from "./groups";
import { Sidebar, Name } from "./styles";

const Aside: React.FC<any> = (props) => {
    return (
        <Sidebar>
            <Name>{t("Navigation")}</Name>
            <Navigation />
            <Name>{t("Groups")}</Name>
            <Groups />
        </Sidebar>
    );
};

export default withRouter(Aside);
