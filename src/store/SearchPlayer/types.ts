export const PLAYER_LOADING = 'PLAYER_LOADING';
export const PLAYER_FAIL = 'PLAYER_FAIL';
export const PLAYER_SUCCESS = 'PLAYER_SUCCESS';

export type PlayerType = {
    name: string;
    abilities: PlayerAbility[];
    sprites: PlayerSprites;
    stats: PlayerStat[];
};

export type PlayerAbility = {
    ability: {
        name: string;
        url: string;
    };
};

export type PlayerSprites = {
    front_default: string;
};

export type PlayerStat = {
    base_state: number;
    stat: {
        name: string;
    };
};

export interface IPlayerLoading {
    type: typeof PLAYER_LOADING;
}

export interface IPlayerFail {
    type: typeof PLAYER_FAIL;
}

export interface IPlayerSuccess {
    type: typeof PLAYER_SUCCESS;
    payload: PlayerType;
}

export type PlayerDispathTypes = IPlayerLoading | IPlayerFail | IPlayerSuccess;

// export interface IPlayer {
//     id: string;
//     name: string;
//     age: string;
//     position: string;
//     picture: string;
// }
