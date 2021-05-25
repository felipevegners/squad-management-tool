import { idText } from 'typescript';
import {
    CreateTeamDispathTypes,
    ITeamInfo,
    TEAM_INFO_LOADING,
    TEAM_INFO_FAIL,
    TEAM_INFO_SUCCESS,
} from './types';

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
        default:
            return state;
    }
};

export default teamInfoReducer;
