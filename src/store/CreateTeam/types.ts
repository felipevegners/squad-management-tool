export const TEAM_INFO_LOADING = 'TEAM_INFO_LOADING';
export const TEAM_INFO_SUCCESS = 'TEAM_INFO_SUCCESS';
export const TEAM_INFO_FAIL = 'TEAM_INFO_FAIL';
export const TEAM_CONFIG_LOADING = 'TEAM_CONFIG_LOADING';
export const TEAM_CONFIG_SUCCESS = 'TEAM_CONFIG_SUCCESS';
export const TEAM_CONFIG_FAIL = 'TEAM_CONFIG_FAIL';
export const TEAM_FORMATION_SUCCESS = 'TEAM_FORMATION_SUCCESS';

// TEAM INFORMATION TYPES
export interface ITeamInfo {
    id: number;
    name: string;
    description: string;
    website: string;
    type: string;
    tags: string[];
    configuration: ITeamConfig;
}

// TEAM CONFIGURATION TYPES
export interface ITeamConfig {
    actualFormation: string; // 4-4-2
    lines: [
        {
            line: string; // defense
            players: [
                {
                    id: string;
                    name: string;
                    age: number;
                    nationality: string;
                    initials: string;
                    photo: string;
                    pickedPosition: string;
                }
            ];
        }
    ];
}

export interface ITeamInfoLoading {
    type: typeof TEAM_INFO_LOADING;
}
export interface ITeamInfoFail {
    type: typeof TEAM_INFO_FAIL;
}

export interface ITeamInfoSuccess {
    type: typeof TEAM_INFO_SUCCESS;
    payload: ITeamInfo;
}

export type CreateTeamDispathTypes =
    | ITeamInfoLoading
    | ITeamInfoFail
    | ITeamInfoSuccess;
