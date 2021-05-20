import styled from 'styled-components';
import Colors from '../../styles/Colors';
import Sizes from '../../styles/Sizes';

export const Container = styled.div`
    padding: ${Sizes.s40};
    display: flex;
    flex-grow: 1;
    border: 1px solid red;
`;

export const Title = styled.h3`
    font-size: 14px;
    color: ${Colors.mediumGray};
    text-align: center;
    text-transform: uppercase;
`;
