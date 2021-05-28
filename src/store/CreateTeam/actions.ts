import { Dispatch } from 'redux';

import {
    CreateTeamDispathTypes,
    TEAM_INFO_LOADING,
    TEAM_INFO_FAIL,
    TEAM_INFO_SUCCESS,
} from './types';

const getTeamInfo =
    (newTeam: any) =>
    (dispatch: Dispatch<CreateTeamDispathTypes>): void => {
        dispatch({
            type: TEAM_INFO_LOADING,
        });

        try {
            dispatch({
                type: TEAM_INFO_SUCCESS,
                payload: newTeam,
            });
        } catch {
            dispatch({
                type: TEAM_INFO_FAIL,
            });
        }
    };

export const teamActions = {
    getTeamInfo,
};
