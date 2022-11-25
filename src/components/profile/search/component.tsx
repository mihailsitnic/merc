import React from "react";
import img from "img";
import { Section, Flex, Icon, Input } from "./styles";

const Search: React.FC<any> = (props) => {
    const { search } = props;

    return (
        <Section>
            <Flex>
                <Icon src={img.iconSearchList} />
                <Input onChange={(e: any) => search(e.target.value)} />
            </Flex>
        </Section>
    );
};

export default Search;
