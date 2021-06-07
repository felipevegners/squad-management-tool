import { Dispatch } from 'redux';

import {
    CreateTeamDispathTypes,
    TEAM_INFO_LOADING,
    TEAM_INFO_FAIL,
    TEAM_INFO_SUCCESS,
    TEAM_INFO_UPDATE_LOADING,
    TEAM_INFO_UPDATE_SUCCESS,
    TEAM_DELETE_SUCCESS,
    ITeamInfo,
} from './types';

const createNewTeam =
    (newTeam: ITeamInfo) =>
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
const updateTeam =
    (teamToEdit: ITeamInfo) =>
    (dispatch: Dispatch<CreateTeamDispathTypes>): void => {
        dispatch({
            type: TEAM_INFO_UPDATE_LOADING,
        });

        try {
            dispatch({
                type: TEAM_INFO_UPDATE_SUCCESS,
                payload: teamToEdit,
            });
        } catch {
            dispatch({
                type: TEAM_INFO_FAIL,
            });
        }
    };

const deleteTeam =
    (id: ITeamInfo['id']) =>
    (dispatch: Dispatch<CreateTeamDispathTypes>): void => {
        try {
            dispatch({
                type: TEAM_DELETE_SUCCESS,
                payload: id,
            });
        } catch {
            dispatch({
                type: TEAM_INFO_FAIL,
            });
        }
    };

export const teamActions = {
    createNewTeam,
    updateTeam,
    deleteTeam,
};
