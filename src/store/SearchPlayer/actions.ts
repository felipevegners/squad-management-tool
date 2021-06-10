import { Dispatch } from 'redux';
import {
    PlayerDispathTypes,
    PLAYER_FAIL,
    PLAYER_LOADING,
    PLAYER_SUCCESS,
} from './types';

import { playerService } from '../Services/Player.services';
const getPlayer =
    (name: string) =>
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    (dispatch: Dispatch<PlayerDispathTypes>): any => {
        dispatch({ type: PLAYER_LOADING });

        return playerService
            .getPlayers(name)
            .then((res) => dispatch({ type: PLAYER_SUCCESS, payload: res }))
            .catch((err) => {
                dispatch({ type: PLAYER_FAIL });
                console.log('Fail ---> ', err);
            });
    };

export const playerActions = {
    getPlayer,
};
