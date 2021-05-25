import React, { useCallback, useEffect, useState } from 'react';
import FieldPosition from '../../Components/FieldPosition/FieldPosition';

import * as S from './FormationLine.styles';

interface IFormationLine {
    line: string;
    players: number;
}

const FormationLine = ({ line, players }: IFormationLine): JSX.Element => {
    const createPlayers = (num: number) => {
        let countPosition = 0;

        const linePlayers = [];
        for (let i = 0; i < num; i++) {
            countPosition++;
            linePlayers.push(
                <FieldPosition key={i} position={`${line}-${countPosition}`} />
            );
        }
        return linePlayers;
    };

    return (
        <S.LineContainer className={`${line}-${players}`}>
            {createPlayers(players)}
        </S.LineContainer>
    );
};

export default FormationLine;
