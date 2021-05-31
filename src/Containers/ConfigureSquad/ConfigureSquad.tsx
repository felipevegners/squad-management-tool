import React from 'react';
import FieldConfig from '../../Components/FieldConfig/FieldConfig';
import SearchPlayer from '../../Components/SearchPlayer/SearchPlayer';

import * as S from './ConfigureSquad.styles';

const ConfigureSquad = ({ sendConfig }: any): JSX.Element => {
    return (
        <S.MainContainer>
            <S.Title>Configure Squad</S.Title>
            <S.Container>
                <FieldConfig sendConfig={sendConfig} />
                <SearchPlayer />
            </S.Container>
            <input type="submit" value="ENVIAR" />
        </S.MainContainer>
    );
};

export default ConfigureSquad;
