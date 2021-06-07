import { ITeamInfo } from './types';

export const updateTeam = (
    state: ITeamInfo[],
    payload: ITeamInfo
): ITeamInfo[] => {
    return state.map((team: ITeamInfo) => {
        if (team.id === payload.id) {
            console.log('utils ===> ', team.id, payload.id);
            return {
                ...team,
                ...payload,
            };
        } else {
            return team;
        }
    });
};
export const deleteTeam = (
    state: ITeamInfo[],
    payload: number
): ITeamInfo[] => {
    return state.filter(({ id }) => id !== payload);
};
