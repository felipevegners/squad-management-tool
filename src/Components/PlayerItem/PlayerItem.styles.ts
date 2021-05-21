import styled from 'styled-components';
import Colors from '../../styles/Colors';

export const ListItem = styled.li`
    padding: 12px;
    margin-bottom: 12px;
    display: flex;
    flex-direction: row;
    align-items: flex-start;
    outline: 2px dashed ${Colors.lightGray};
    border-left: 2px dashed ${Colors.lightGray};
    border-right: 2px dashed ${Colors.lightGray};
    background: linear-gradient(
        180deg,
        ${Colors.white} 10%,
        ${Colors.lightGray} 100%
    );
    cursor: grab;
`;

export const ItemContainer = styled.div`
    padding: 12px 0px;
    display: flex;
    flex-direction: column;

    &.player-info {
        flex-grow: 1;
    }
`;

export const PlayerImage = styled.img`
    margin-right: 12px;
    border: 2px solid ${Colors.lightGray};
    width: 60px;
    height: 60px;
    border-radius: 50%;
    align-self: center;
    user-select: none;
`;

export const Text = styled.p`
    margin-bottom: 6px;
    font-size: 14px;
    font-weight: bold;
    color: ${Colors.black};
    user-select: none;
`;

export const Span = styled.span`
    margin-left: 4px;
    display: inline-block;
    font-weight: normal;
    color: ${Colors.red};
    user-select: none;
`;
