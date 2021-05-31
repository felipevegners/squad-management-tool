import { Dispatch } from 'redux';
import TeamService from '../Services/Team.services';

import {
    CreateTeamDispathTypes,
    TEAM_INFO_LOADING,
    TEAM_INFO_FAIL,
    TEAM_INFO_SUCCESS,
} from './types';

const createNewTeam =
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

const getTeamToEdit =
    (id: string) => async (dispatch: Dispatch<CreateTeamDispathTypes>) => {
        try {
            const res = await TeamService.getTeamToEdit(id);
            console.log('res ---> ', res);
            // return Promise.resolve(res.data);
        } catch (err) {
            return Promise.reject(err);
        }
    };

export const teamActions = {
    createNewTeam,
    getTeamToEdit,
};
