import { IFormation } from '../../Components/FieldConfig/types';

export const TEAM_INFO_LOADING = 'TEAM_INFO_LOADING';
export const TEAM_INFO_SUCCESS = 'TEAM_INFO_SUCCESS';
export const TEAM_INFO_FAIL = 'TEAM_INFO_FAIL';
export const TEAM_INFO_UPDATE_LOADING = 'TEAM_INFO_UPDATE_LOADING';
export const TEAM_INFO_UPDATE_SUCCESS = 'TEAM_INFO_UPDATE_SUCCESS';

// TEAM INFORMATION TYPES
export interface ITeamInfo {
    id?: number;
    name: string;
    description: string;
    website: string;
    type: string;
    tags: string[];
    lines: IFormation[];
    configuration: string;
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
export interface ITeamInfoUptadeLoading {
    type: typeof TEAM_INFO_UPDATE_LOADING;
}

export interface ITeamInfoUptadeSuccess {
    type: typeof TEAM_INFO_UPDATE_SUCCESS;
    payload: ITeamInfo;
}

export type CreateTeamDispathTypes =
    | ITeamInfoLoading
    | ITeamInfoFail
    | ITeamInfoSuccess
    | ITeamInfoUptadeLoading
    | ITeamInfoUptadeSuccess;
