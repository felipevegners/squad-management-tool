import styled from 'styled-components';

import Colors from '../../styles/Colors';

export const MainContainer = styled.div`
    padding: 60px 180px;
    margin-bottom: 60px;
`;

export const Title = styled.h3`
    margin: 40px auto;
    font-size: 14px;
    color: ${Colors.mediumGray};
    text-align: center;
    text-transform: uppercase;
`;

export const FormContainerRow = styled.div`
    display: grid;
    padding: 40px 0;
    grid-template-columns: 1fr 1fr;
    gap: 120px;
    grid-template-areas: 'left right';
`;

export const FormContainerColumn = styled.div<{ gridArea: string }>`
    position: relative;
    display: flex;
    flex-direction: column;
    grid-area: ${(props) => props.gridArea};
`;

export const FormItem = styled.div`
    position: relative;
    margin-bottom: 32px;
    display: flex;
    flex-direction: column-reverse;

    &:last-of-type {
        margin-bottom: 0;
        height: 100%;
    }
`;

export const FormLabel = styled.label`
    margin-bottom: 8px;
    font-size: 14px;
    font-weight: bold;
    color: ${Colors.black};
`;

export const StyledInput = styled.input`
    position: relative;
    padding: 10px;
    border: 1px solid ${Colors.mediumGray};
    border-radius: 4px;
    color: ${Colors.gray};
    background-color: transparent;
    outline: none;

    & ~ span {
        position: absolute;
        bottom: 0px;
        font-size: 12px;
        color: ${Colors.red};
        opacity: 0;
        transition: all 0.12s;
    }

    &:focus:empty {
        border-color: ${Colors.red};
        & ~ label {
            color: ${Colors.red};
        }
    }

    &:focus:valid {
        border-color: ${Colors.black};
        & ~ label {
            color: ${Colors.black};
        }
    }

    &:not(:focus):not(:placeholder-shown):invalid {
        border-color: ${Colors.red};
        & ~ label {
            color: ${Colors.red};
        }
    }

    &.warn {
        border-color: ${Colors.red};
        & ~ span {
            bottom: -20px;
            opacity: 1;
        }
        & ~ label {
            color: ${Colors.red};
        }
    }
`;

export const StyledTextArea = styled.textarea`
    padding: 10px;
    height: 100%;
    border: 1px solid ${Colors.mediumGray};
    border-radius: 4px;
    font-family: sans-serif;
    color: ${Colors.gray};
    background-color: transparent;
    resize: none;
    outline: none;
`;

export const RadioButtonContainer = styled.div`
    margin-right: 36px;
`;

export const StyledInputRadio = styled.input`
    &:checked,
    :not(:checked) {
        position: absolute;
        left: -9999px;

        & + label {
            display: inline-block;
            margin-bottom: 0;

            &:before {
                content: '';
                position: absolute;
                left: 0;
                top: 0;
                width: 18px;
                height: 18px;
                border: 1px solid ${Colors.mediumGray};
                border-radius: 100%;
                background-color: ${Colors.white};
                cursor: pointer;
            }
            &:after {
                content: '';
                position: absolute;
                left: 3px;
                top: 3px;
                width: 12px;
                height: 12px;
                background: linear-gradient(
                    90deg,
                    ${Colors.gradientColorA} 0%,
                    ${Colors.gradientColorB} 100%
                );
                border-radius: 100%;
                -webkit-transition: all 0.2s ease;
                transition: all 0.2s ease;
            }
        }
    }

    &:not(:checked) + label:after {
        opacity: 0;
        -webkit-transform: scale(0);
        transform: scale(0);
    }

    &:checked + label:after {
        opacity: 1;
        -webkit-transform: scale(1);
        transform: scale(1);
    }

    &:checked {
        & + label {
            color: ${Colors.red};
        }
    }

    & + label {
        position: relative;
        display: inline;
        padding-left: 24px;
        margin-right: 36px;
        font-weight: normal;
    }

    & ~ span {
        position: relative;
        font-size: 12px;
        left: -15px;
        color: ${Colors.red};
        opacity: 0;
        transition: all 0.12s;
    }

    &:focus:invalid:not(:checked) {
        & ~ span {
            left: 0px;
            opacity: 1;
        }
        & + label:before {
            border-color: ${Colors.red};
        }
    }
`;
