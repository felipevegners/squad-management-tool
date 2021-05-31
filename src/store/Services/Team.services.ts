import axios from 'axios';

const api = axios.create({
    baseURL: 'http://localhost:3000',
    headers: {
        'Content-type': 'application/json',
    },
});

const getTeam = (id: number) => {
    return api.get(`/management/team/${id}`);
};

const getTeamToEdit = (id: string) => {
    return api.get(`/management/edit/${id}`);
};

const editTeam = (id: number, data: any) => {
    return api.put(`/management/edit/${id}`, data);
};

const TeamService = {
    getTeam,
    editTeam,
    getTeamToEdit,
};

export default TeamService;
