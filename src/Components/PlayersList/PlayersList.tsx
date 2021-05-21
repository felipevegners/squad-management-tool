import React from 'react';
import { useSelector } from 'react-redux';

import { rootStore } from '../../store/store';
import PlayerItem from '../PlayerItem/PlayerItem';

import * as S from './PlayersList.styles';

const PlayersList = (): JSX.Element => {
    const playerState = useSelector((state: rootStore) => state.player);

    const { player } = playerState;

    return (
        <S.List>
            {player &&
                player.map((data, i) => (
                    <PlayerItem
                        key={i.toString()}
                        id={i.toString()}
                        name={data.player.name}
                        firstName={data.player.firstname}
                        lastName={data.player.lastname}
                        age={data.player.age}
                        nationality={data.player.nationality}
                        photo={data.player.photo}
                    />
                ))}
        </S.List>
    );
};

export default PlayersList;
