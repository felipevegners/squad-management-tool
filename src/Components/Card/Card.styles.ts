import styled from 'styled-components';
import Colors from '../../styles/Colors';

export const Container = styled.div`
    width: 100%;
    height: 100%;
    border-radius: 8px;
    background-color: ${Colors.white};
    -webkit-box-shadow: 0px 0px 2px 0px rgba(0, 0, 0, 0.2);
    box-shadow: 0px 0px 2px 0px rgba(0, 0, 0, 0.2);
`;

export const Header = styled.div`
    display: flex;
    padding: 20px 30px;
    justify-content: space-between;
    align-items: center;
    border-bottom: 1px solid ${Colors.lightGray};
`;
export const Title = styled.h2`
    font-size: 20px;
    color: ${Colors.purple};
`;

export const Content = styled.div`
    padding: 22px 22px 30px 22px;
`;
