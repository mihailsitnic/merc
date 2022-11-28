import React from "react";
import EditModal from "../modal";
import More from "../more";
import { ActionWrap } from "./styles";

const Actions: React.FC<any> = (props) => {
    const { row } = props;

    return (
        <ActionWrap>
            <EditModal {...props} row={row} />
            <More {...props} row={row} />
        </ActionWrap>
    );
};

export default Actions;
