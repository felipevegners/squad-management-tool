import React, { useState } from 'react';
import FieldPosition from '../FieldPosition/FieldPosition';

import * as S from './FieldConfig.styles';

const FieldConfig = (): JSX.Element => {
    const [fieldPosition, setFieldPosition] = useState<Record<string, string>>(
        {}
    );

    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const handleDrop = (e: any): void => {
        e.preventDefault();
        const data = JSON.parse(e.dataTransfer.getData('player'));
        const playerPosition = e.target.id;
        setFieldPosition({
            ...data,
            pickedPosition: playerPosition,
        });
    };
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const handleDragOver = (e: any): void => {
        e.preventDefault();
    };

    return (
        <S.Container>
            <S.FieldPosition
                onDrop={handleDrop}
                onDragOver={handleDragOver}
                id="deffense-1"
            >
                <FieldPosition photo={fieldPosition.photo} />
            </S.FieldPosition>
        </S.Container>
    );
};

export default FieldConfig;
