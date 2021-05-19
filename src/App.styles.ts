import styled from 'styled-components';
import Colors from './styles/Colors';

export const App = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    max-width: 100vw;
    min-height: 100vh;
    background-color: ${Colors.background};
`;
