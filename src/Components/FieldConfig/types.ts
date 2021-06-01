export interface IFormation {
    players: [
        {
            position: string;
            empty: boolean;
            initials: string;
            photo: string;
        }
    ];
}

export interface IGetConfig {
    getConfig(params: any): void;
    config: any;
    lines: any;
}
