import styled from 'styled-components';

import Colors from '../../styles/Colors';

export const MainContainer = styled.div`
    padding: 0px 180px;
    margin-bottom: 60px;
`;

export const Title = styled.h3`
    margin-bottom: 40px;
    font-size: 14px;
    color: ${Colors.mediumGray};
    text-align: center;
    text-transform: uppercase;
`;

export const FormContainer = styled.div<{ gridArea: string }>`
    position: relative;
    display: flex;
    flex-direction: column;
    grid-area: ${(props) => props.gridArea};
`;

export const StyledForm = styled.form`
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 120px;
    grid-template-areas: 'left right';
`;

export const FormItem = styled.div`
    position: relative;
    margin-bottom: 32px;
    display: flex;
    flex-direction: column;

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
    padding: 10px;
    border: 1px solid ${Colors.mediumGray};
    border-radius: 4px;
    color: ${Colors.gray};
    background-color: transparent;

    &:focus {
        box-shadow: unset;
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
`;

export const RadioButtonContainer = styled.div`
    margin-right: 36px;
`;

export const FormItemRadio = styled.div`
    position: relative;
    display: flex;
    flex-direction: row;
    margin-bottom: 32px;
`;

export const StyledInputRadio = styled.input`
    &:checked,
    :not(:checked) {
        position: absolute;
        left: -9999px;
        display: none;

        & + label {
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

    & + label {
        position: relative;
        display: inline;
        padding-left: 24px;
        margin-right: 36px;
        font-weight: normal;
    }
`;
