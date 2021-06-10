import axios from 'axios';

const api = axios.create({
    method: 'GET',
    headers: {
        'x-rapidapi-host': 'v3.football.api-sports.io',
        'x-rapidapi-key': '01914a0fc0aa29f2560c0200b4a221d2',
    },
});

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const getPlayers = async (name: string): Promise<any> => {
    try {
        const res = await api.get(
            `https://v3.football.api-sports.io/players?league=2&search=${name}`
        );
        return res.data;
    } catch (e) {
        console.log(e);
    }
};

export const playerService = {
    getPlayers,
};
