import {
    CreateTeamDispathTypes,
    ITeamInfo,
    TEAM_INFO_LOADING,
    TEAM_INFO_FAIL,
    TEAM_INFO_SUCCESS,
    TEAM_INFO_UPDATE_LOADING,
    TEAM_INFO_UPDATE_SUCCESS,
} from './types';
import { updateTeam } from './utils';

interface IDefaultState {
    id?: number;
    loading: boolean;
    teams: ITeamInfo[];
}

const defaultState: IDefaultState = {
    loading: false,
    id: 0,
    teams: [],
};

const teamInfoReducer = (
    state: IDefaultState = defaultState,
    action: CreateTeamDispathTypes
): IDefaultState => {
    switch (action.type) {
        case TEAM_INFO_FAIL:
            return {
                loading: false,
                teams: [...state.teams],
            };
        case TEAM_INFO_LOADING:
            return {
                loading: true,
                teams: [...state.teams],
            };
        case TEAM_INFO_SUCCESS:
            return {
                loading: false,
                teams: [
                    ...state.teams,
                    {
                        ...action.payload,
                        id: state.teams.length,
                    },
                ],
            };
        case TEAM_INFO_UPDATE_LOADING:
            return {
                loading: true,
                teams: [...state.teams],
            };
        case TEAM_INFO_UPDATE_SUCCESS:
            return {
                loading: false,
                teams: updateTeam(state.teams, action.payload),
            };
        default:
            return state;
    }
};

export default teamInfoReducer;
