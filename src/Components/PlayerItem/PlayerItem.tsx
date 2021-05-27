import React from 'react';

import * as S from './PlayerItem.styles';

interface IPlayerData {
    id: string;
    name: string;
    firstName: string;
    lastName: string;
    age: number;
    nationality: string;
    photo: string;
}

const PlayerItem = ({
    id,
    name,
    firstName,
    lastName,
    age,
    nationality,
    photo,
}: IPlayerData): JSX.Element => {
    const handleDrag = (e: React.DragEvent<HTMLElement>): void => {
        const names = name.split(' ');
        let initials = name[0].slice(0, 1).toUpperCase();
        if (names.length > 1) {
            initials += names[names.length - 1].slice(0, 1).toUpperCase();
        }
        const playerData = {
            id: id,
            name: name,
            age: age,
            nationality: nationality,
            initials: initials,
            photo: photo,
        };
        e.dataTransfer.setData('player', JSON.stringify(playerData));
    };
    return (
        <S.ListItem draggable onDragStart={handleDrag}>
            <S.PlayerImage src={photo} alt={name} />
            <S.ItemContainer className="player-info">
                <S.Text>
                    Name:
                    <S.Span>{name}</S.Span>
                </S.Text>
                <S.Text>
                    nationality:
                    <S.Span>{nationality}</S.Span>
                </S.Text>
            </S.ItemContainer>
            <S.ItemContainer>
                <S.Text>
                    Age:
                    <S.Span>{age}</S.Span>
                </S.Text>
            </S.ItemContainer>
        </S.ListItem>
    );
};

export default PlayerItem;
