import styled from 'styled-components';
import Colors from '../../styles/Colors';

export const MainContainer = styled.div`
    display: flex;
    flex-direction: column;
`;

export const Field = styled.div`
    position: relative;
    padding: 20px 10px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    width: 100%;
    height: 790px;
    background: green;
    border: 5px solid rgba(255, 255, 255, 0.4);
    border-radius: 4px;

    &:before {
        content: '';
        position: absolute;
        top: calc(50% - 100px);
        left: calc(50% - 100px);
        width: 200px;
        height: 200px;
        border-radius: 50%;
        border: 5px solid rgba(255, 255, 255, 0.4);
    }

    &:after {
        content: '';
        position: absolute;
        top: 50%;
        left: -5px;
        width: calc(100% + 5px);
        height: 5px;
        background-color: rgba(255, 255, 255, 0.4);
    }
`;

export const FormationSelectContainer = styled.div`
    margin-bottom: 12px;
    display: flex;
    flex-direction: row;
    align-items: center;
`;

export const FormationSelect = styled.select`
    padding: 10px;
    min-width: 100px;
    border: 1px solid ${Colors.mediumGray};
    border-radius: 4px;
    color: ${Colors.gray};
    font-weight: bold;
    background-color: transparent;

    &:focus {
        box-shadow: unset;
    }

    & option {
        text-align: center;
    }
`;

export const FormationLabel = styled.label`
    margin-right: 24px;
    font-size: 14px;
    font-weight: bold;
    color: ${Colors.black};
`;

export const LineContainer = styled.div`
    padding: 16px 0;
    display: flex;
    align-items: center;
    justify-content: space-around;
`;

export const Position = styled.div<{ photo: string }>`
    position: relative;
    margin: 0 12px 0 12px;

    &.empty {
        position: relative;
        display: flex;
        align-items: center;
        justify-content: center;
        width: 68px;
        height: 68px;
        border-radius: 50%;
        background-color: rgba(255, 255, 255, 0.4);
        border: 1px solid ${Colors.gray};
        transition: all 0.3s;

        &:before {
            content: '+';
            position: absolute;
            top: calc(50% - 20px);
            left: 24px;
            font-size: 32px;
            color: ${Colors.white};
            opacity: 0.6;
        }

        &:after {
            content: '';
            position: absolute;
            width: 82px;
            height: 82px;
            border-radius: 100%;
            border: 2px dotted ${Colors.white};
            opacity: 0.6;
            animation: rotation 6s infinite linear;
        }
    }
    &.occupied {
        position: relative;
        width: 68px;
        height: 68px;
        display: flex;
        align-items: center;
        justify-content: center;
        background: url('${(props) => props.photo}') center/contain no-repeat;
        border: 2px solid ${Colors.white};
        border-radius: 50%;
        z-index: 9999;

        &:before {
            content: '';
            position: absolute;
            width: 82px;
            height: 82px;
            border-radius: 100%;
            border: 2px dotted ${Colors.white};
            opacity: 0.6;
        }
    }

    @keyframes rotation {
        from {
            transform: rotate(0deg);
        }
        to {
            transform: rotate(359deg);
        }
    }
`;
