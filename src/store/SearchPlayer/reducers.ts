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
                player: action.payload,
            };
        default:
            return state;
    }
};

export default playerReducer;

// const INITIAL_STATE = [
//     {
//         id: '1',
//         name: 'Felipe Vegners',
//         age: '35',
//         position: 'attack',
//         picture: './barretos/img.jpg',
//     },
//     {
//         id: '2',
//         name: 'Renato Barretos',
//         age: '27',
//         position: 'defense',
//         picture: './barretos/img.jpg',
//     },
//     {
//         id: '3',
//         name: 'Ronaldo Cristiano',
//         age: '30',
//         position: 'attack',
//         picture: './barretos/img.jpg',
//     },
// ];
