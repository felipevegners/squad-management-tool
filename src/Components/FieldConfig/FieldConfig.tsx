/* eslint-disable @typescript-eslint/no-explicit-any */
import React, { useState } from 'react';
import { buildPlayers } from '../../helpers';

import positions from '../../helpers/data/positions';

import * as S from './FieldConfig.styles';
interface IFormation {
    players: [
        {
            position: string;
            empty: boolean;
            initials: string;
            photo: string;
        }
    ];
}

interface IGetConfig {
    getConfig(params: any): void;
    config: any;
    lines: any;
}

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const FieldConfig = ({ getConfig, config, lines }: IGetConfig): JSX.Element => {
    const initialState = () => {
        if (config && lines) {
            return {
                configuration: config,
                lines: lines,
            };
        }
    };
    const [fieldConfig, setFieldConfig] = useState<IFormation[]>([]);
    const [finalConfig, setFinalConfig] = useState<Record<string, any>>({});
    const [editConfig, setEditConfig] = useState(initialState());

    console.log('final config --->', finalConfig);

    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const handleDrop = (e: any): void => {
        e.preventDefault();

        const data = JSON.parse(e.dataTransfer.getData('player'));
        const playerPosition = e.target.id;

        for (let i = 0; i < fieldConfig.length; i++) {
            const obj = fieldConfig[i];
            const idx = obj.players.findIndex(
                (x) => x.position === playerPosition
            );

            if (idx !== -1) {
                obj.players[idx].empty = false;
                obj.players[idx].initials = data.initials;
                obj.players[idx].photo = data.photo;
            }
        }
        setFinalConfig({ ...finalConfig, lines: fieldConfig });
        getConfig({ ...finalConfig, lines: fieldConfig });
    };

    const handleDragOver = (e: React.DragEvent<HTMLElement>): void => {
        e.preventDefault();
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
        setEditConfig({ configuration: e.target.value, lines: finalLine });
        setFieldConfig(finalLine);
        setFinalConfig({ ...finalConfig, configuration: e.target.value });
        getConfig({
            configuration: e.target.value,
            lines: finalLine,
        });
    };

    return (
        <S.MainContainer>
            <S.FormationSelectContainer>
                <S.FormationLabel>Formation</S.FormationLabel>
                <S.FormationSelect
                    onChange={handleFormation}
                    value={finalConfig.configuration}
                >
                    <option>Select formation</option>
                    {positions
                        ? positions.map((position, i) => (
                              <option key={i} value={position}>
                                  {position}
                              </option>
                          ))
                        : ''}
                </S.FormationSelect>
            </S.FormationSelectContainer>
            <S.Field>
                {editConfig
                    ? editConfig.lines.map((config: any, i: number) => (
                          <S.LineContainer key={i}>
                              {config.players.map((player: any, i: number) => (
                                  <S.Position
                                      key={i}
                                      onDrop={handleDrop}
                                      onDragOver={handleDragOver}
                                      className={`${
                                          player.empty ? 'empty' : 'occupied'
                                      }`}
                                      photo={player.photo ? player.photo : ''}
                                      id={player.position}
                                  />
                              ))}
                          </S.LineContainer>
                      ))
                    : fieldConfig.map((config: any, i: number) => (
                          <S.LineContainer key={i}>
                              {config.players.map((player: any, i: number) => (
                                  <S.Position
                                      key={i}
                                      onDrop={handleDrop}
                                      onDragOver={handleDragOver}
                                      className={`${
                                          player.empty ? 'empty' : 'occupied'
                                      }`}
                                      photo={player.photo ? player.photo : ''}
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
