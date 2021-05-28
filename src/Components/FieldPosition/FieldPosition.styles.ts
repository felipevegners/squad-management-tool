import styled from 'styled-components';
import Colors from '../../styles/Colors';

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
