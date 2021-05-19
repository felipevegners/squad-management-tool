import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import SearchPlayer from '../../Containers/SearchPlayers/SearchPlayer';

import { getPlayer } from '../../store/SearchPlayer/actions';

import { rootStore } from '../../store/store';

import * as S from './Management.styles';

const Management = (): JSX.Element => {
    const dispatch = useDispatch();
    const [playerName, setPlayerName] = useState('');
    const playerState = useSelector((state: rootStore) => state.player);

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) =>
        setPlayerName(e.target.value);

    const handleSubmit = () => {
        dispatch(getPlayer(playerName));
    };

    console.log('state ---> ', playerState);
    return (
        <S.Container>
            {/* <SearchPlayer /> */}
            <input type="text" onChange={handleChange} />
            <button onClick={handleSubmit}>Search</button>
            {playerState.player && (
                <div>
                    <img
                        src={playerState.player.sprites.front_default}
                        alt=""
                    />
                    <p>Name: {playerState.player.name}</p>
                </div>
            )}
        </S.Container>
    );
};

export default Management;
