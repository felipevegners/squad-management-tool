import React, { ReactNode } from 'react';

import * as S from './Card.styles';

interface ICard {
    children: ReactNode;
    title: string;
    content: ReactNode;
}

const Card = ({ title, content, children }: ICard): JSX.Element => {
    return (
        <S.Container className="card">
            <S.Header>
                <S.Title>{title}</S.Title>
                {content}
            </S.Header>
            <S.Content>{children}</S.Content>
        </S.Container>
    );
};

export default Card;
