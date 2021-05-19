import React from 'react';
import { Button } from '../../Components/Button/Button.styles';
import Card from '../../Components/Card/Card';

import * as S from './MyTeams.styles';

const MyTeams = (): JSX.Element => {
    return (
        <S.Container>
            <Card title="My Teams" content={<Button>+</Button>}>
                Content
            </Card>
        </S.Container>
    );
};

export default MyTeams;
