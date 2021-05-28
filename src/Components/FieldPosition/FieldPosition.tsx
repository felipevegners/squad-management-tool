import React, { useEffect, useState } from 'react';

import * as S from './FieldPosition.styles';

const FieldPosition = ({ position, sendPlayer }: any): JSX.Element => {
    const [positionConfig, setPositionConfig] = useState<Record<string, any>>(
        {}
    );
    const [isOccupied, setOccupied] = useState<boolean>(false);

    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const handleDrop = (e: any): void => {
        e.preventDefault();

        const data = JSON.parse(e.dataTransfer.getData('player'));
        const playerPosition = e.target.id;
        setOccupied(true);

        setPositionConfig(data);

        sendPlayer({
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
            photo={positionConfig.photo}
            id={position}
        />
    );
};
export default FieldPosition;
