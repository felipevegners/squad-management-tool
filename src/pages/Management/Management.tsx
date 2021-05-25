import React, { useEffect, useState } from 'react';
import Card from '../../Components/Card/Card';
import ConfigureSquad from '../../Containers/ConfigureSquad/ConfigureSquad';
import TeamInformationForm from '../../Containers/TeamInformationForm/TeamInformationForm';

import * as S from './Management.styles';

const Management = (): JSX.Element => {
    const [team, setTeam] = useState({});

    useEffect(() => {
        console.log('parent team ---> ', team);
    }, [team]);

    const handleSubmit = (e: any) => {
        e.preventDefault();
        console.log('foooo');
    };
    return (
        <S.Container>
            <Card title="Create your team" content="">
                <form onSubmit={handleSubmit}>
                    <TeamInformationForm />
                    <ConfigureSquad />
                </form>
            </Card>
        </S.Container>
    );
};

export default Management;
