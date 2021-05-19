import styled from 'styled-components';

import Colors from '../../styles/Colors';
import Sizes from '../../styles/Sizes';

export const MainContainer = styled.div`
    position: relative;
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: ${Sizes.y40};
    max-width: 100vw;
    height: 70px;
    background: ${Colors.gradientColorA};
    background: linear-gradient(
        90deg,
        ${Colors.gradientColorA} 0%,
        ${Colors.gradientColorB} 100%
    );
`;

export const Container = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    cursor: pointer;
`;

export const Logo = styled.a<{ url: string }>`
    position: relative;
    margin-right: 20px;
    background: url('${(props) => props.url}') left center no-repeat;
    background-size: 130px 60px;
    width: 42px;
    height: 42px;
    text-decoration: none;
`;

export const Title = styled.h1`
    font-size: 20px;
    color: ${Colors.white};
`;

export const LoginArea = styled.div`
    align-self: flex-end;
    cursor: pointer;
`;
