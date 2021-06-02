import styled from 'styled-components';
import Colors from '../../styles/Colors';

export const TableContainer = styled.div`
    border: 0;
    width: 100%;
    border-collapse: collapse;
    font-size: 14px;
    font-weight: bold;
`;

export const TableHead = styled.div`
    padding: 12px 0;
    margin-bottom: 6px;
    display: grid;
    grid-template-columns: 2fr 3fr 1fr;
    width: 100%;
    border-bottom: 1px solid ${Colors.lightGray};
`;
export const TableBody = styled.div``;

export const TableRow = styled.div`
    border-bottom: 1px inset ${Colors.baseHover};
    &:hover {
        border-color: transparent;
    }
`;

export const TableRowContent = styled.div`
    display: grid;
    grid-template-columns: 2fr 3fr 1fr;

    & .icons {
        width: 18px;
        height: 18px;
        fill: ${Colors.black};
        cursor: pointer;
        opacity: 0;
        transition: all 0.12s;
    }

    &:hover {
        background-color: rgba(183, 76, 134, 0.15);
        color: ${Colors.buttonGradientA};
        border-radius: 6px;

        & .icons {
            position: relative;
            opacity: 1;
            fill: ${Colors.buttonGradientA};
        }
    }
`;

export const Icon = styled.div`
    position: relative;
    padding: 0 8px;
    display: flex;
    width: auto;
    transition: opacity 1s ease-in;

    &:before,
    :after {
        opacity: 0;
    }

    &:hover {
        &:before {
            content: attr(data-tooltip);
            position: absolute;
            padding: 6px 8px;
            top: -40px;
            left: -20px;
            width: 80px;
            font-size: 12px;
            text-align: center;
            font-weight: normal;
            color: ${Colors.white};
            border-radius: 4px;
            background-color: ${Colors.black};
            opacity: 1;
        }

        &:after {
            content: '';
            position: absolute;
            top: -18px;
            width: 20px;
            height: 20px;
            border-left: 10px solid transparent;
            border-right: 10px solid transparent;
            border-top: 10px solid ${Colors.black};
            opacity: 1;
        }
    }
`;
export const TableColumn = styled.div`
    padding: 16px 8px;
    display: flex;
    &.divisorR {
        border-right: 1px solid ${Colors.baseHover};
    }
`;
