import styled from 'styled-components';
import device from 'theme/device'
import colors from 'theme/colors';

export const Body = styled.div`
    display: flex;
    justify-content: space-between;
`;

export const Main = styled.main`
    width: calc(100% - 285px);
    min-height: 100%;
    padding-left: 32px;
    transition: All .2s;

    @media ${device.laptop} { 
        width: 100%;
        padding-left: 0;
    }

    @media ${device.tablet} {
        padding: 25px 0;
    }

    @media ${device.mobileL} { 
        padding: 20px 0;
    }
`;