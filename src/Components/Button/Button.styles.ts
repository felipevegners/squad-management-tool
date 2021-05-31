import styled from 'styled-components';
import Colors from '../../styles/Colors';

export const Button = styled.button<{
    marginTop?: string;
    width?: string;
    height?: string;
    borderRad?: string;
    fontSize?: string;
}>`
    margin-top: ${(props) => props.marginTop};
    width: ${(props) => props.width};
    height: ${(props) => props.height};
    border-radius: ${(props) => props.borderRad};
    border: none;
    color: ${Colors.white};
    font-size: ${(props) => props.fontSize};
    background: ${Colors.gradientColorA};
    background: linear-gradient(
        180deg,
        ${Colors.buttonGradientA} 0%,
        ${Colors.buttonGradientB} 80%
    );
    transition: box-shadow 0.5s;

    &:hover {
        -webkit-box-shadow: 0px 16px 30px 0px rgba(183, 76, 134, 0.5);
        box-shadow: 0px 6px 16px 0px rgba(183, 76, 134, 0.5);
        cursor: pointer;
        border: 1px solid ${Colors.red};
    }
`;
