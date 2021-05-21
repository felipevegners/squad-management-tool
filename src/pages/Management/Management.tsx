import React from 'react';
import Card from '../../Components/Card/Card';
import ConfigureSquad from '../../Containers/ConfigureSquad/ConfigureSquad';
import TeamInformationForm from '../../Containers/TeamInformationForm/TeamInformationForm';

import * as S from './Management.styles';

const Management = (): JSX.Element => {
    return (
        <S.Container className="barretos">
            <Card title="Create your team" content="">
                <TeamInformationForm />
                <ConfigureSquad />
            </Card>
        </S.Container>
    );
};

export default Management;
