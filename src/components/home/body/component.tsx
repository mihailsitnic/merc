import React from "react";
import List from "components/list";
import Empty from "./empty";
import { Main, Wrapper, Inner } from "./styles";

const Hero: React.FC<any> = () => {
    return (
        <Main>
            <Wrapper>
                <Inner>
                    {true ? <List /> : <Empty />}
                </Inner>
            </Wrapper>
        </Main>
    );
};

export default Hero;
