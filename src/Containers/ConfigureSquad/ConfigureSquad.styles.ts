import styled from 'styled-components';
import Colors from '../../styles/Colors';

export const MainContainer = styled.div`
    padding: 0px 120px;
`;

export const Container = styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 120px;
`;

export const Title = styled.h3`
    margin-bottom: 40px;
    font-size: 14px;
    color: ${Colors.mediumGray};
    text-align: center;
    text-transform: uppercase;
`;
