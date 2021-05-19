import React from 'react';

import * as S from './Header.styles';
import logo from '../../assets/logo-new.svg';
import User from '../User/User';

const Header = (): JSX.Element => {
    return (
        <S.MainContainer>
            <S.Container>
                <S.Logo url={logo} />
                <S.Title>Squad Management Tool</S.Title>
            </S.Container>
            <S.Container>
                <S.LoginArea>
                    <User />
                </S.LoginArea>
            </S.Container>
        </S.MainContainer>
    );
};

export default Header;
