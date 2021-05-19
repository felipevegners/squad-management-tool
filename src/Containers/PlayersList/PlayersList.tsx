import React from 'react';
import { useSelector } from 'react-redux';

import { rootStore } from '../../store/store';

import * as S from './PlayersList.styles';

const PlayersList = (): JSX.Element => {
    const playerState = useSelector((state: rootStore) => state.player);

    const { player } = playerState;

    return (
        <S.List>
            {player &&
                player.map((data) => (
                    <li key={data.player.id}>
                        <p>Name: {data.player.name}</p>
                        <p>Age: {data.player.age}</p>
                        <p>Nacionality: {data.player.nationality}</p>
                        <img src={data.player.photo} alt="" />
                    </li>
                ))}
        </S.List>
    );
};

export default PlayersList;
