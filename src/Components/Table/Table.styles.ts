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
    padding: 6px 0;
    margin-bottom: 6px;
    display: grid;
    grid-template-columns: 2fr 3fr;
    width: 100%;
    border-bottom: 1px solid ${Colors.lightGray};

    && .table-head-title {
        padding: 8px 12px;

        &:first-of-type {
            border-right: 1px solid ${Colors.lightGray};
        }
    }
`;

export const SortIconCtn = styled.div`
    display: flex;
    flex-direction: column;
`;

export const SortUp = styled.div`
    position: relative;
    display: flex;
    width: 14px;
    height: 14px;
    cursor: pointer;

    &:before {
        content: '';
        position: absolute;
        top: 4px;
        left: 1px;
        border-left: 5px solid transparent;
        border-right: 5px solid transparent;
        border-bottom: 5px solid ${Colors.mediumGray};
    }

    &:hover {
        &:before {
            border-bottom-color: ${Colors.black};
        }
    }

    &.selected {
        &:before {
            border-bottom-color: ${Colors.black};
        }
    }
`;

export const SortDown = styled.div`
    position: relative;
    display: flex;
    width: 14px;
    height: 14px;
    cursor: pointer;

    &:before {
        content: '';
        position: absolute;
        top: 2px;
        left: 1px;
        border-left: 5px solid transparent;
        border-right: 5px solid transparent;
        border-top: 5px solid ${Colors.mediumGray};
    }

    &:hover {
        &:before {
            border-top-color: ${Colors.black};
        }
    }

    &.selected {
        &:before {
            border-top-color: ${Colors.black};
        }
    }
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
    grid-template-columns: 2fr 3fr;

    & .icons-container {
        display: flex;
    }

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
    padding: 16px 12px;
    display: flex;
    justify-content: space-between;
    align-items: center;
`;
