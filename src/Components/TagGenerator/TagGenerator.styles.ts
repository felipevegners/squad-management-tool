import styled from 'styled-components';
import Colors from '../../styles/Colors';

import CloseIcon from '../../Assets/close.svg';

export const Container = styled.div`
    position: relative;
    display: flex;
    flex-wrap: wrap;
    flex-direction: row;
    justify-content: space-between;
    align-items: flex-start;
    padding: 12px;
    min-height: 120px;
    border: 1px solid ${Colors.mediumGray};
    border-radius: 4px;
    background-color: ${Colors.white};

    &:before {
        content: attr(data-content);
        position: absolute;
        bottom: -13px;
        left: 6px;
        font-size: 12px;
        color: ${Colors.red};
        opacity: 0;
        transition: all 0.2s;
    }

    &.tag-warn {
        border-color: ${Colors.red};

        &:before {
            opacity: 1;
            transform: translatey(8px);
            transition: all 0.2s;
        }
    }
`;

export const Tag = styled.div`
    position: relative;
    display: inline-block;
    margin-right: 12px;
    /* margin: 0 12px 12px 0; */
    padding: 6px 32px 6px 12px;
    font-size: 14px;
    color: ${Colors.white};
    border-radius: 14px;
    background-color: ${Colors.red};
    user-select: none;
`;

export const DeleteTag = styled.span`
    position: absolute;
    top: 8px;
    right: 6px;
    width: 14px;
    height: 14px;
    background: url(${CloseIcon}) center center no-repeat;
    background-size: contain;
    opacity: 0.7;
    cursor: pointer;

    &:hover {
        opacity: 1;
        transition: opacity 0.4s;
    }
`;

export const NewTagInput = styled.input`
    border: none;
    flex-grow: 1;
    padding: 8px;
    font-size: 14px;
    color: ${Colors.gray};
    outline: none;
`;
