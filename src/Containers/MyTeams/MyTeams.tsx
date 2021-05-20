import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '../../Components/Button/Button.styles';
import Card from '../../Components/Card/Card';

import * as S from './MyTeams.styles';

const MyTeams = (): JSX.Element => {
    return (
        <S.Container>
            <Card
                title="My Teams"
                content={
                    <Link to="/management">
                        <Button>+</Button>
                    </Link>
                }
            >
                Content
            </Card>
        </S.Container>
    );
};

export default MyTeams;
