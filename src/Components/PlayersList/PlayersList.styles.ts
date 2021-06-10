import styled from 'styled-components';
import Colors from '../../styles/Colors';

export const Container = styled.div``;

export const LoaderCtn = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
`;

export const InfoWarning = styled.div`
    display: flex;
    align-items: center;
    font-size: 14px;
    color: ${Colors.red};

    & > svg {
        fill: ${Colors.red};
        margin-right: 4px;
        width: 16px;
        height: 16px;
    }
`;

export const List = styled.ul`
    padding-top: 6px;
    list-style: none;
    height: 500px;
    overflow: scroll;
`;
