import React from 'react';
import { useHistory } from 'react-router';
import { BiEdit, BiShareAlt, BiTrashAlt } from 'react-icons/bi';

import * as S from './Table.styles';

// eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
const Table = ({ data }): JSX.Element => {
    const history = useHistory();
    return (
        <S.TableContainer>
            <S.TableHead>
                <S.TableColumn className="divisorR">Name</S.TableColumn>
                <S.TableColumn>Description</S.TableColumn>
            </S.TableHead>
            <S.TableBody>
                {data.map((team, i) => (
                    <S.TableRow key={i}>
                        <S.TableRowContent>
                            <S.TableColumn>{team.name}</S.TableColumn>
                            <S.TableColumn>{team.description}</S.TableColumn>
                            <S.TableColumn>
                                <S.Icon data-tooltip="Delete">
                                    <BiTrashAlt className="icons" />
                                </S.Icon>
                                <S.Icon data-tooltip="Share">
                                    <BiShareAlt className="icons" />
                                </S.Icon>
                                <S.Icon data-tooltip="Edit">
                                    <BiEdit
                                        className="icons"
                                        onClick={() =>
                                            history.push(
                                                `/management/edit/${team.id}`
                                            )
                                        }
                                    />
                                </S.Icon>
                            </S.TableColumn>
                        </S.TableRowContent>
                    </S.TableRow>
                ))}
            </S.TableBody>
        </S.TableContainer>
    );
};

export default Table;
