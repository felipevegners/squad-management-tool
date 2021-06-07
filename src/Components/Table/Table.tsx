import React, { useEffect, useState } from 'react';
import { useHistory } from 'react-router';
import { BiEdit, BiShareAlt, BiTrashAlt } from 'react-icons/bi';

import * as S from './Table.styles';
import { sortValues } from '../../helpers';
import { useDispatch } from 'react-redux';
import { teamActions } from '../../store/CreateTeam/actions';

// eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
const Table = ({ data }): JSX.Element => {
    const dispatch = useDispatch();
    const history = useHistory();
    const [teams, setTeams] = useState(data);

    useEffect(() => {
        setTeams(data);
    }, [data]);

    const handleSort = (e, direction) => {
        const arrows = document.getElementsByClassName('arrow');

        for (let i = 0; i < arrows.length; i++) {
            arrows[i].classList.remove('selected');
        }
        e.target.classList.add('selected');

        if (direction === 'name-up') {
            const sorted = [...teams].sort(sortValues('name', 'asc'));
            setTeams(sorted);
        }
        if (direction === 'name-down') {
            const sorted = [...teams].sort(sortValues('name', 'desc'));
            setTeams(sorted);
        }
        if (direction === 'desc-up') {
            const sorted = [...teams].sort(sortValues('description', 'asc'));
            setTeams(sorted);
        }
        if (direction === 'desc-down') {
            const sorted = [...teams].sort(sortValues('description', 'desc'));
            setTeams(sorted);
        }
    };
    return (
        <S.TableContainer>
            <S.TableHead>
                <S.TableColumn className="table-head-title">
                    Name
                    <S.SortIconCtn>
                        <S.SortUp
                            className="arrow"
                            onClick={(e) => handleSort(e, 'name-up')}
                        />
                        <S.SortDown
                            className="arrow"
                            onClick={(e) => handleSort(e, 'name-down')}
                        />
                    </S.SortIconCtn>
                </S.TableColumn>
                <S.TableColumn className="table-head-title">
                    Description
                    <S.SortIconCtn>
                        <S.SortUp
                            className="arrow"
                            onClick={(e) => handleSort(e, 'desc-up')}
                        />
                        <S.SortDown
                            className="arrow"
                            onClick={(e) => handleSort(e, 'desc-down')}
                        />
                    </S.SortIconCtn>
                </S.TableColumn>
            </S.TableHead>
            <S.TableBody>
                {teams.map((team, i) => (
                    <S.TableRow key={i}>
                        <S.TableRowContent>
                            <S.TableColumn>{team.name}</S.TableColumn>
                            <S.TableColumn>
                                {team.description}
                                <div className="icons-container">
                                    <S.Icon
                                        data-tooltip="Delete"
                                        onClick={() =>
                                            dispatch(
                                                teamActions.deleteTeam(team.id)
                                            )
                                        }
                                    >
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
                                </div>
                            </S.TableColumn>
                        </S.TableRowContent>
                    </S.TableRow>
                ))}
            </S.TableBody>
        </S.TableContainer>
    );
};

export default Table;
