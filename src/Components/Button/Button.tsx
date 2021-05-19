import React, { ReactNode } from 'react';

import * as S from './Button.styles';

interface IButton {
    children: ReactNode;
}

const Button = ({ children }: IButton): JSX.Element => {
    return <S.Button>{children}</S.Button>;
};

export default Button;
