import styled from 'styled-components';
import Colors from '../../styles/Colors';

export const LoadingRing = styled.div<{ width; height }>`
    display: inline-block;
    margin: 0 auto;
    position: relative;
    width: ${(props) => props.width};
    height: ${(props) => props.height};

    & > div {
        box-sizing: border-box;
        display: block;
        position: absolute;
        width: ${(props) => props.width};
        height: ${(props) => props.height};
        border: 6px solid ${Colors.buttonGradientA};
        border-radius: 50%;
        animation: lds-ring 1.2s cubic-bezier(0.5, 0, 0.5, 1) infinite;
        border-color: ${Colors.buttonGradientA} transparent transparent
            transparent;
    }
    & > div:nth-child(1) {
        animation-delay: -0.45s;
    }
    & > div:nth-child(2) {
        animation-delay: -0.3s;
    }
    & > div:nth-child(3) {
        animation-delay: -0.15s;
    }
    @keyframes lds-ring {
        0% {
            transform: rotate(0deg);
        }
        100% {
            transform: rotate(360deg);
        }
    }
`;
