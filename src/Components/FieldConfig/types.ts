export interface IFormation {
    players: [
        {
            empty: boolean;
            name: string;
            initials: string;
            position: string;
            photo: string;
            age: number;
            nationality: string;
        }
    ];
}

export interface IGetConfig {
    getConfig(params): void;
    config: string;
    lines: IFormation[];
}
