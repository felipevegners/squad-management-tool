import React from 'react';
import Card from '../../Components/Card/Card';

import * as S from './TopFive.styes';

const TopFive = (): JSX.Element => {
    return (
        <S.Container>
            <Card title="Top 5" content="">
                Content
            </Card>
        </S.Container>
    );
};

export default TopFive;
