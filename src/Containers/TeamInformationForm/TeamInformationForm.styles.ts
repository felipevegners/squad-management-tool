import styled from 'styled-components';

import Colors from '../../styles/Colors';

export const MainContainer = styled.div`
    padding: 40px 120px;
`;

export const FormContainer = styled.div<{ gridArea: string }>`
    position: relative;
    width: 100%;
    grid-area: ${(props) => props.gridArea};
`;

export const FormItem = styled.div`
    position: relative;
    margin-bottom: 32px;
`;

export const StyledForm = styled.form`
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 120px;
    grid-template-areas: 'left right';
    width: 100%;
`;

export const FormLabel = styled.label`
    display: block;
    margin-bottom: 8px;
    font-size: 14px;
    font-weight: bold;
    color: ${Colors.black};
`;

export const StyledInput = styled.input`
    display: block;
    width: calc(100% - 12px);
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
    display: block;
    width: calc(100% - 12px);
    padding: 10px;
    border: 1px solid ${Colors.mediumGray};
    border-radius: 4px;
    font-family: sans-serif;
    color: ${Colors.gray};
    background-color: transparent;
    resize: none;
`;

export const RadioButtonContainer = styled.div`
    margin-right: 36px;
    border: 1px solid red;
`;

export const StyledInputRadio = styled.input`
    &:checked,
    :not(:checked) {
        position: absolute;
        opacity: 0.2;

        & + label {
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
            }
            &:after {
                content: '';
                position: absolute;
                left: 4px;
                top: 4px;
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
