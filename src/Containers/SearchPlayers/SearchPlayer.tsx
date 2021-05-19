import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { useDebouncedCallback } from 'use-debounce';

import { playerActions } from '../../store/SearchPlayer/actions';

const SearchPlayer = (): JSX.Element => {
    const dispatch = useDispatch();
    const [name, setName] = useState<string>('');

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        handleSearch(e.target.value);
        setName(e.target.value);
    };

    const handleSearch = useDebouncedCallback((query: string) => {
        if (query.length > 3) {
            console.log('search query --> ', name);
            // dispatch(playerActions.getPlayer(name));
        }
    }, 500);

    return (
        <div>
            <input
                type="text"
                name=""
                id=""
                placeholder="Search your player"
                onChange={handleChange}
            />
        </div>
    );
};

export default SearchPlayer;
