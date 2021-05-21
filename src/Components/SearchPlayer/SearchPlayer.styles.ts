import styled from 'styled-components';
import Colors from '../../styles/Colors';

export const Container = styled.div`
    display: flex;
    flex-direction: column;
`;

export const FormItem = styled.div`
    position: relative;
    margin-bottom: 20px;
    display: flex;
    flex-direction: column;
    width: 100%;
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
