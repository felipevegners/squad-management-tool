import React, { useState } from 'react';

import * as S from './FieldPosition.styles';

const FieldPosition = ({
    initials,
    photo,
    name,
    age,
    position,
}: any): JSX.Element => {
    const [lineConfig, setLineConfig] = useState<Record<string, string>>({});
    const [isOccupied, setOccupied] = useState<boolean>(false);

    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const handleDrop = (e: any): void => {
        e.preventDefault();

        const data = JSON.parse(e.dataTransfer.getData('player'));
        const playerPosition = e.target.id;
        setOccupied(true);

        setLineConfig({
            ...data,
            pickedPosition: playerPosition,
        });
    };
    const handleDragOver = (e: React.DragEvent<HTMLElement>): void => {
        e.preventDefault();
    };
    return (
        <S.Position
            onDrop={handleDrop}
            onDragOver={handleDragOver}
            className={`${isOccupied ? 'occupied' : 'empty'}`}
            photo={lineConfig.photo}
            id={position}
        />
    );
};
export default FieldPosition;
