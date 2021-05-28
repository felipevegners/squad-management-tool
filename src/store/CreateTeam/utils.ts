export const addConfiguration = (state: any, payload: string) => {
    return [...state, { configuration: { actualFormation: payload } }];
};
