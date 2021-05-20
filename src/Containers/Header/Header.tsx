import React from 'react';

import * as S from './Header.styles';
import logo from '../../Assets/logo-new.svg';
import User from '../User/User';
import { Link } from 'react-router-dom';

const Header = (): JSX.Element => {
    return (
        <S.MainContainer>
            <S.Container>
                <Link to="/" className="link">
                    <S.Logo url={logo} />
                    <S.Title>Squad Management Tool</S.Title>
                </Link>
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
