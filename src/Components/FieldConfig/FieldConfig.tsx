import React, { useEffect, useState } from 'react';

import positions from '../../utils/positions';

import * as S from './FieldConfig.styles';
import FormationLine from '../../Containers/FormationLine/FormationLine';
import { format } from 'prettier';

interface IFormation {
    players: [
        {
            position: string;
            empty: boolean;
        }
    ];
}

const FieldConfig = (): JSX.Element => {
    const [formation, setFormation] = useState<Record<string, any>>([]);
    const [positionConfig, setPositionConfig] = useState<Record<string, any>[]>(
        []
    );

    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const handleDrop = (e: any): void => {
        e.preventDefault();

        const data = JSON.parse(e.dataTransfer.getData('player'));
        const playerPosition = e.target.id;

        for (let i = 0; i < formation.length; i++) {
            const obj = formation[i];
            const index = obj.players.findIndex(
                (x: any) => x.position === playerPosition
            );
            console.log(obj.players[index].position);
        }

        // console.log(formation.length);

        setPositionConfig([
            ...positionConfig,
            {
                ...data,
                position: playerPosition,
            },
        ]);
    };

    const handleDragOver = (e: React.DragEvent<HTMLElement>): void => {
        e.preventDefault();
    };

    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const buildPlayers = (lineName: any, lines: any, formation: any) => {
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
    const handleFormation = (e: any) => {
        const selectedFormation = e.target.value
            .split('-')
            .map((v: string) => parseInt(v, 10));

        let buildLines: any;
        if (selectedFormation.length === 4) {
            buildLines = ['defense', 'middleA', 'middleB', 'attack'];
        } else {
            buildLines = ['defense', 'middle', 'attack'];
        }

        const finalLine = buildLines.map((line: any) =>
            buildPlayers(line, buildLines, selectedFormation)
        );

        finalLine.reverse().push({
            players: [
                {
                    position: 'goal-keeper',
                    empty: true,
                },
            ],
        });
        setFormation(finalLine);
    };

    return (
        <S.MainContainer>
            <S.FormationSelectContainer>
                <S.FormationLabel>Formation</S.FormationLabel>
                <S.FormationSelect onChange={handleFormation}>
                    <option selected>Select formation</option>
                    {positions
                        ? positions.map((position) => (
                              <option value={position}>{position}</option>
                          ))
                        : ''}
                </S.FormationSelect>
            </S.FormationSelectContainer>

            <S.Field>
                {formation.map((formation: any) => (
                    <S.LineContainer>
                        {formation.players.map((player: any) => (
                            <S.Position
                                onDrop={handleDrop}
                                onDragOver={handleDragOver}
                                className={`${
                                    player.position ? 'empty' : 'occupied'
                                }`}
                                photo={'photo'}
                                id={player.position}
                            />
                        ))}
                    </S.LineContainer>
                ))}
            </S.Field>
        </S.MainContainer>
    );
};

export default FieldConfig;
