import {
    PlayerDispathTypes,
    PlayerType,
    PLAYER_FAIL,
    PLAYER_LOADING,
    PLAYER_SUCCESS,
} from './types';

interface IDefaultState {
    loading: boolean;
    player?: PlayerType[];
    results?: number;
}

const defaultState: IDefaultState = {
    loading: false,
};

const playerReducer = (
    state: IDefaultState = defaultState,
    action: PlayerDispathTypes
): IDefaultState => {
    switch (action.type) {
        case PLAYER_FAIL:
            return {
                loading: false,
            };
        case PLAYER_LOADING:
            return {
                loading: true,
            };
        case PLAYER_SUCCESS:
            return {
                loading: false,
                player: action.payload.response,
                results: action.payload.results,
            };
        default:
            return state;
    }
};

export default playerReducer;
