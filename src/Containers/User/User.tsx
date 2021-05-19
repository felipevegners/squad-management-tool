import React from 'react';

import * as S from './User.styles';

const User = (): JSX.Element => {
    return (
        <S.UserContainer>
            <S.UserName>John Doe</S.UserName>
            <S.Avatar />
        </S.UserContainer>
    );
};

export default User;
