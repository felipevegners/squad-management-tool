import { Dispatch } from 'redux';
import {
    PlayerDispathTypes,
    PLAYER_FAIL,
    PLAYER_LOADING,
    PLAYER_SUCCESS,
} from './types';

// interface IGetPlayers {
//     age: number;
//     birth: Record<string, string>;
//     firstname: string;
//     height: string;
//     id: number;
//     injuried: boolean;
//     lastname: string;
//     name: string;
//     nationality: string;
//     photo: string;
//     weight: string;
//     statistics: Record<string, string>;
// }

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
