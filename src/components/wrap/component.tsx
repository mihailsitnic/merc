import React from "react";
import Sidebar from "components/sidebar";
import { Body, Main } from "./styles";

const Component: React.FC<any> = (props) => {
    return (
        <Body>
            <Sidebar />

            <Main>{props.children}</Main>
        </Body>
    );
};

export default Component;
