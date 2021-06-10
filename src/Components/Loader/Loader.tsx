import React from 'react';

import * as S from './Loader.styles';

interface ILoadingProps {
    width: string;
    height: string;
    visible: boolean;
}

const Loader = ({ width, height, visible }: ILoadingProps): JSX.Element => {
    return (
        visible && (
            <S.LoadingRing width={width} height={height}>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
            </S.LoadingRing>
        )
    );
};

export default Loader;
