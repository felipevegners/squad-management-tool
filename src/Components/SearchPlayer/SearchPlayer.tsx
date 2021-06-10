import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { useDebouncedCallback } from 'use-debounce';

import * as S from './SearchPlayer.styles';

import { playerActions } from '../../store/SearchPlayer/actions';
import PlayersList from '../PlayersList/PlayersList';

const SearchPlayer = (): JSX.Element => {
    const dispatch = useDispatch();
    const [name, setName] = useState<string>('');

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        handleSearch(e.target.value);
        setName(e.target.value);
    };

    const handleSearch = useDebouncedCallback((query: string) => {
        if (query.length > 3) {
            dispatch(playerActions.getPlayer(name));
        }
    }, 500);

    return (
        <S.Container>
            <S.FormItem>
                <S.FormLabel>Search player</S.FormLabel>
                <S.StyledInput
                    type="text"
                    placeholder="Search your player"
                    onChange={handleChange}
                />
            </S.FormItem>
            <PlayersList />
        </S.Container>
    );
};

export default SearchPlayer;
