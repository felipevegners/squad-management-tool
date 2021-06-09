import styled from 'styled-components';
import Colors from '../../styles/Colors';

export const List = styled.ul`
    padding-top: 6px;
    list-style: none;
    height: 500px;
    overflow: scroll;
    border-bottom: 1px solid ${Colors.lightGray};
`;
