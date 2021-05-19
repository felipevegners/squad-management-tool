import styled from 'styled-components';
import Sizes from '../../styles/Sizes';

export const MainContainer = styled.div`
    display: grid;
    grid-template-columns: 2fr 2fr;
    grid-template-rows: repeat(4, 1fr);
    grid-template-areas:
        'my-teams top-five'
        'my-teams top-five'
        'my-teams picked'
        'my-teams picked';
    gap: 20px 40px;
    justify-content: space-around;
    margin: ${Sizes.s40};
    flex-grow: 1;
`;
