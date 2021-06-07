// interface IBuildPlayer {
//     position: string;
//     empty: boolean;
// }

export const buildPlayers = (
    lineName: string,
    lines: string[],
    formation: number[]
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
): any => {
    const si = lines.indexOf(lineName);
    const len = si >= 0 ? formation[si] : 0;
    const arr = [];

    for (let i = 0; i < len; i++) {
        arr[i] = {
            position: `${lineName}-${i + 1}`,
            empty: true,
        };
    }

    return {
        players: [...arr],
    };
};

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const sortValues = (key: string, order: string): any => {
    return function innerSort(a, b) {
        if (!a.hasOwnProperty(key) || !b.hasOwnProperty(key)) {
            return 0;
        }

        const varA = typeof a[key] === 'string' ? a[key].toUpperCase() : a[key];
        const varB = typeof b[key] === 'string' ? b[key].toUpperCase() : b[key];

        let comparison = 0;
        if (varA > varB) {
            comparison = 1;
        } else if (varA < varB) {
            comparison = -1;
        }
        return order === 'desc' ? comparison * -1 : comparison;
    };
};
