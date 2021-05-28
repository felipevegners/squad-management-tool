import React, { useEffect, useState } from 'react';
import FieldPosition from '../../Components/FieldPosition/FieldPosition';

import * as S from './FormationLine.styles';

interface IFormationLine {
    line: string;
    playersQty: number;
}

const FormationLine = ({ line, playersQty }: IFormationLine): JSX.Element => {
    const [lines, setLines] = useState<Record<string, any>[]>([]);

    const handleSendPlayer = (playerInfo: any) => {
        setLines([
            ...lines,
            {
                line: line,
                players: [{ ...playerInfo }],
            },
        ]);
    };

    useEffect(() => {
        console.log('lines state --->', lines);
    }, [lines]);

    const createPlayers = (num: number) => {
        let countPosition = 0;

        const linePlayers = [];
        for (let i = 0; i < num; i++) {
            countPosition++;
            linePlayers.push(
                <FieldPosition
                    key={i}
                    position={`${line}-${countPosition}`}
                    sendPlayer={handleSendPlayer}
                />
            );
        }
        return linePlayers;
    };

    return (
        <S.LineContainer className={`${line}-${playersQty}`}>
            {createPlayers(playersQty)}
        </S.LineContainer>
    );
};

export default FormationLine;
