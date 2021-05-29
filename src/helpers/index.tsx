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
