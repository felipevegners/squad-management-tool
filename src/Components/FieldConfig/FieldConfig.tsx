import React, { useState } from 'react';

import positions from '../../utils/positions';

import * as S from './FieldConfig.styles';
import FormationLine from '../../Containers/FormationLine/FormationLine';

interface IFormation {
    line: string;
    players: number;
}

const FieldConfig = (): JSX.Element => {
    const [formation, setFormation] = useState<IFormation[]>([]);

    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const handleFormation = (e: any) => {
        const selectedFormation = e.target.value.split('-');

        let formationConfig: string[];

        if (selectedFormation.length === 4) {
            formationConfig = ['defense', 'middle1', 'middle2', 'attack'];
        } else {
            formationConfig = ['defense', 'middle', 'attack'];
        }
        const finalFormation = selectedFormation.map(
            (players: number, i: number) => ({
                line: formationConfig[i].toString(),
                players: players,
            })
        );
        setFormation(finalFormation);
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
                <FormationLine players={1} line="goal-keeper" />
                {formation
                    ? formation.map((config) => (
                          <FormationLine
                              players={config.players}
                              line={config.line}
                          />
                      ))
                    : ''}
            </S.Field>
        </S.MainContainer>
    );
};

export default FieldConfig;
