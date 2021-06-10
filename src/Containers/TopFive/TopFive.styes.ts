import styled from 'styled-components';
import Colors from '../../styles/Colors';

export const Container = styled.div`
    grid-area: top-five;
`;

export const ListsContainer = styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 16px;
`;

export const ListWrap = styled.div``;

export const ListTitle = styled.h4`
    font-size: 14px;
    margin-bottom: 16px;
    color: ${Colors.black};
`;

export const List = styled.ul`
    list-style: none;
    padding: 4px;
    flex-grow: 1;
    border-radius: 6px;
    background: ${Colors.background};
`;

export const ListItem = styled.li`
    padding: 10px 16px;
    margin-bottom: 4px;
    border-radius: 6px;
    display: flex;
    justify-content: space-between;
    font-size: 14px;
    background: ${Colors.white};
    border: 1px solid ${Colors.white};

    &:last-of-type {
        margin-bottom: 0;
    }

    &:hover {
        cursor: pointer;
        border-color: ${Colors.gradientColorA};
    }
`;
