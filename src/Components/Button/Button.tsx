import React, { ReactNode } from 'react';

import * as S from './Button.styles';

interface IButton {
    children: ReactNode;
    onClick?:
        | ((event: React.MouseEvent<HTMLButtonElement>) => void)
        | undefined;
}

const Button = ({ children }: IButton): JSX.Element => {
    return <S.Button width="100%">{children}</S.Button>;
};

export default Button;
