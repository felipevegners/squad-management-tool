export const PLAYER_LOADING = 'PLAYER_LOADING';
export const PLAYER_FAIL = 'PLAYER_FAIL';
export const PLAYER_SUCCESS = 'PLAYER_SUCCESS';

export interface PlayerType {
    player: {
        id: number;
        name: string;
        firstname: string;
        lastname: string;
        age: number;
        nationality: string;
        photo: string;
    };
}
export interface IPlayerLoading {
    type: typeof PLAYER_LOADING;
}
export interface IPlayerFail {
    type: typeof PLAYER_FAIL;
}

export interface IPlayerSuccess {
    type: typeof PLAYER_SUCCESS;
    payload: PlayerType[];
}

export type PlayerDispathTypes = IPlayerLoading | IPlayerFail | IPlayerSuccess;
