/* eslint-disable @typescript-eslint/no-explicit-any */
import React, { useState } from 'react';
import { buildPlayers } from '../../helpers';

import positions from '../../helpers/data/positions';

import * as S from './FieldConfig.styles';
import { IGetConfig } from './types';

const FieldConfig = ({ getConfig, config, lines }: IGetConfig): JSX.Element => {
    const initialState = () => {
        if (config && lines) {
            return {
                configuration: config,
                lines: lines,
            };
        } else {
            return {
                configuration: '',
                lines: [],
            };
        }
    };
    const [finalConfig, setFinalConfig] = useState(initialState());
    const [ages, setAges] = useState([]);

    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const handleDrop = (e: any): void => {
        e.preventDefault();

        const data = JSON.parse(e.dataTransfer.getData('player'));
        const playerPosition = e.target.id;
        setAges([...ages, data.age]);

        for (let i = 0; i < finalConfig.lines.length; i++) {
            const obj = finalConfig.lines[i];
            const idx = obj.players.findIndex(
                (x) => x.position === playerPosition
            );

            if (idx !== -1) {
                obj.players[idx].empty = false;
                obj.players[idx].name = data.name;
                obj.players[idx].initials = data.initials;
                obj.players[idx].photo = data.photo;
                obj.players[idx].age = data.age;
                obj.players[idx].nationality = data.nationality;
            }
        }

        const avAge = (ages.reduce((t, n) => t + n, 0) / ages.length).toFixed(
            1
        );
        setFinalConfig({ ...finalConfig, lines: finalConfig.lines });
        getConfig({
            ...finalConfig,
            lines: finalConfig.lines,
            avAge: avAge,
        });
    };

    const handleRemovePlayer = (e: any, position: string): void => {
        e.preventDefault();
        for (let i = 0; i < finalConfig.lines.length; i++) {
            const obj = finalConfig.lines[i];
            const idx = obj.players.findIndex((x) => x.position === position);

            if (idx !== -1) {
                obj.players[idx].empty = true;
                obj.players[idx].name = '';
                obj.players[idx].initials = '';
                obj.players[idx].photo = '';
                obj.players[idx].age = 0;
                obj.players[idx].nationality = '';
            }
        }
        setFinalConfig({ ...finalConfig, lines: finalConfig.lines });
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
        setFinalConfig({
            ...finalConfig,
            configuration: e.target.value,
            lines: finalLine,
        });
        getConfig({
            configuration: e.target.value,
            lines: finalLine,
        });
    };

    console.log('final', finalConfig);

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
                {finalConfig
                    ? finalConfig.lines.map((config: any, i: number) => (
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
                                  >
                                      {!player.empty && (
                                          <div className="player-info">
                                              <p>
                                                  <strong>Name: </strong>{' '}
                                                  {player.name
                                                      ? player.name
                                                      : ''}
                                              </p>
                                              <p>
                                                  <strong>Age: </strong>{' '}
                                                  {player.age ? player.age : ''}
                                              </p>
                                              <p>
                                                  <strong>Nationality: </strong>{' '}
                                                  {player.nationality
                                                      ? player.nationality
                                                      : ''}
                                              </p>
                                              <button
                                                  onClick={(e) =>
                                                      handleRemovePlayer(
                                                          e,
                                                          player.position
                                                      )
                                                  }
                                              >
                                                  remove
                                              </button>
                                          </div>
                                      )}
                                  </S.Position>
                              ))}
                          </S.LineContainer>
                      ))
                    : ''}
            </S.Field>
        </S.MainContainer>
    );
};

export default FieldConfig;
