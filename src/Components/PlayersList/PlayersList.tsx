import React from 'react';
import { BiInfoCircle } from 'react-icons/bi';
import { useSelector } from 'react-redux';

import { rootStore } from '../../store/store';
import Loader from '../Loader/Loader';
import PlayerItem from '../PlayerItem/PlayerItem';

import * as S from './PlayersList.styles';

const PlayersList = (): JSX.Element => {
    const playerState = useSelector((state: rootStore) => state.player);

    const { player, results } = playerState;

    return (
        <S.Container>
            <S.LoaderCtn>
                <Loader
                    width="35px"
                    height="35px"
                    visible={playerState.loading}
                />
            </S.LoaderCtn>
            {results === 0 && (
                <S.InfoWarning>
                    <BiInfoCircle />
                    No players found, check your search.
                </S.InfoWarning>
            )}
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
        </S.Container>
    );
};

export default PlayersList;
