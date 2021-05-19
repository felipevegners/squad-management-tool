import { Dispatch } from 'redux';
import {
    PlayerDispathTypes,
    PLAYER_FAIL,
    PLAYER_LOADING,
    PLAYER_SUCCESS,
} from './types';
import axios from 'axios';

export const getPlayer =
    (player: string) => async (dispatch: Dispatch<PlayerDispathTypes>) => {
        try {
            dispatch({
                type: PLAYER_LOADING,
            });

            const res = await axios.get(
                `https://pokeapi.co/api/v2/pokemon/${player}`
            );

            dispatch({
                type: PLAYER_SUCCESS,
                payload: res.data,
            });
        } catch (e) {
            dispatch({
                type: PLAYER_FAIL,
            });
        }
    };
