import React from 'react';
import Card from '../../Components/Card/Card';

import * as S from './PickedPlayer.styles';

const PickedPlayer = (): JSX.Element => {
    return (
        <S.Container>
            <Card title="Picked" content="">
                Content
            </Card>
        </S.Container>
    );
};

export default PickedPlayer;
