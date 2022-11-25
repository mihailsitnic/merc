import React from "react";
import truncate from "components/reusable/truncate";
import { UserName, Href } from "./styles";

const UserLink: React.FC<any> = (props) => {
    const { row } = props;

    return (
        <Href to={`/user/${row.id}`}>
            <UserName>{truncate(row.name, 20)}</UserName>
        </Href>
    );
};

export default UserLink;
