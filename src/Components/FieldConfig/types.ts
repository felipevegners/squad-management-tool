export interface IFormation {
    players: [
        {
            position: string;
            empty: boolean;
            initials: string;
            photo: string;
            age: number;
        }
    ];
}

export interface IGetConfig {
    getConfig(params): void;
    config: string;
    lines: IFormation[];
}
