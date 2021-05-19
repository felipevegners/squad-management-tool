import styled from 'styled-components';
import Colors from '../../styles/Colors';

export const UserContainer = styled.div`
    display: flex;
    align-items: center;
    justify-content: flex-end;
    height: 70px;
`;

export const Avatar = styled.div`
    position: relative;
    width: 42px;
    height: 42px;
    border-radius: 50%;
    background-color: ${Colors.white};
    border: 1px solid ${Colors.gray};
    &:after {
        content: 'JD';
        position: absolute;
        top: calc(50% - 12px);
        left: calc(50% - 12px);
        font-size: 20px;
        color: ${Colors.gray};
        z-index: 9999;
    }
`;

export const UserName = styled.h3`
    margin-right: 12px;
    font-size: 14px;
    color: ${Colors.white};
`;
