import styled from 'styled-components';

export const PlayerPicture = styled.div<{ photo: string }>`
    width: 58px;
    height: 58px;
    background: url('${(props) => props.photo}') center/contain no-repeat;
    border-radius: 50%;
    cursor: grab;
`;
