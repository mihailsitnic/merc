import React, { useState } from "react";
import { withRouter } from "react-router-dom";
import { useParams } from "react-router-dom";
import { t } from "i18next";
import img from "img";
import clickId from "components/reusable/click-id";
import Close from "./close";
import Delete from "components/reusable/delete";
import data from "./data";
import { More, Icon, Ul, Li, CTA } from "./styles";

const PopUp: React.FC<any> = (props) => {
    const { history } = props;
    const { id }: any = useParams();
    const [open, isOpen] = useState<boolean>(false);

    const cta = (item: any) => {
        if (item.title === "Edit") {
            return history.push(`/edit/${id}`);
        }
        clickId("delete");
    };

    const renderList = () => {
        const list = data.map((item) => (
            <Li key={item.id}>
                <CTA title={item.title} onClick={() => cta(item)}>{t(item.title)}</CTA>
            </Li>
        ));
        return (
            <Ul
                {...props}
                active={open}
                className="pop-up"
            >
                {list}
            </Ul>
        );
    };

    return (
        <More>
            <Icon
                src={img.iconMore}
                alt="icon"
                className="icon-more"
                onClick={() => isOpen(true)}
            />
            {renderList()}
            <Close open={(e: any) => isOpen(e)} />
            <Delete />
        </More>
    );
};

export default withRouter(PopUp);
