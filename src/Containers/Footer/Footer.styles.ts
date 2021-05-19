import styled from 'styled-components';
import Colors from '../../styles/Colors';
import Sizes from '../../styles/Sizes';

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    padding: ${Sizes.x20};
    width: 100vw;
    height: 20px;
`;

export const Copyright = styled.p`
    font-size: 12px;
    color: ${Colors.black};
`;
