import React from 'react';

import * as S from './FieldPosition.styles';

const FieldPosition = ({ initials, photo, name, age }: any) => {
    return <S.PlayerPicture photo={photo} />;
};

export default FieldPosition;
