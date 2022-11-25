import React from "react";
import Avatar from "react-avatar";
import img from "img";
import data from "./data";
import { Ul, Li, A, Title, Subtitle, Flex, Wrap, ID, Arrow } from "./styles";

const List: React.FC<any> = () => {

    const renderList = () => {
        const list = data.map((item) =>
            <Li key={item.id}>
                <A to={`/details/${item.id}`}>
                    <Flex>
                        <ID>
                            <Avatar
                                src=""
                                name={item.id.toString().split("").join(" ")}
                                color={item.color}
                                fgColor={item.fgColor}
                                size="68px"
                                round
                            />
                        </ID>

                        <Wrap>
                            <Title>{item.title}</Title>
                            <Subtitle>{item.subtitle}</Subtitle>
                        </Wrap>
                    </Flex>
                    <Arrow src={img.iconArrow} />
                </A>
            </Li>
        );
        return <Ul>{list}</Ul>
    };

    return renderList();
};

export default List;
