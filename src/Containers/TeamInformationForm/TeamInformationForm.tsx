import React, { FormEvent, useCallback, useEffect, useState } from 'react';
import TagGenerator from '../../Components/TagGenerator/TagGenerator';

import * as S from './TeamInformationForm.styles';

import { teamActions } from '../../store/CreateTeam/actions';
import { useDispatch } from 'react-redux';

const TeamInformationForm = (): JSX.Element => {
    const dispatch = useDispatch();

    const [newTeamInfo, setNewTeamInfo] = useState({});

    const handleCreateNewTeam = () => {
        dispatch(teamActions.getTeamInfo(newTeamInfo));
    };

    const handleGetTags = (tags: string[]) => {
        setNewTeamInfo({
            ...newTeamInfo,
            tags: tags,
        });
    };

    const handleChange = (e: any) => {
        const { name, value } = e.target;
        setNewTeamInfo({
            ...newTeamInfo,
            [name]: value,
        });
    };

    const handleValidation = useCallback((e: any) => {
        const { name, value, pattern } = e.target;

        if (name !== 'description') {
            if (value === '') {
                e.target.classList.add('warn');
            } else if (name === 'website') {
                if (value.match(pattern)) {
                    e.target.classList.remove('warn');
                } else {
                    e.target.classList.add('warn');
                }
            } else {
                e.target.classList.remove('warn');
            }
        }
    }, []);

    return (
        <S.MainContainer>
            <S.Title>Team Information</S.Title>
            <S.FormContainerRow>
                <S.FormContainerColumn gridArea="left">
                    <S.FormItem>
                        <S.StyledInput
                            type="text"
                            placeholder="Insert your team name"
                            name="name"
                            onChange={handleChange}
                            onBlur={handleValidation}
                            required
                        />
                        <S.FormLabel>Team Name</S.FormLabel>
                        <span>Insert a valid name</span>
                    </S.FormItem>
                    <S.FormItem>
                        <S.StyledTextArea
                            placeholder="Insert your team description"
                            name="description"
                            rows={8}
                            onChange={handleChange}
                        />
                        <S.FormLabel>Description</S.FormLabel>
                    </S.FormItem>
                </S.FormContainerColumn>

                <S.FormContainerColumn gridArea="right">
                    <S.FormItem>
                        <S.StyledInput
                            type="url"
                            placeholder="https://www.yourteam.com"
                            pattern="https?://.+"
                            name="website"
                            onChange={handleChange}
                            onBlur={handleValidation}
                            required
                        />
                        <S.FormLabel>Team website</S.FormLabel>
                        <span>Insert a valid website</span>
                    </S.FormItem>
                    <S.FormItem>
                        <S.RadioButtonContainer>
                            <S.StyledInputRadio
                                type="radio"
                                name="type"
                                value="real"
                                id="real"
                                onChange={handleChange}
                                required
                            />
                            <S.FormLabel htmlFor="real">Real</S.FormLabel>
                            <S.StyledInputRadio
                                type="radio"
                                name="type"
                                value="fantasy"
                                id="fantasy"
                                onChange={handleChange}
                                required
                            />
                            <S.FormLabel htmlFor="fantasy">Fantasy</S.FormLabel>
                            <span>Select a team type</span>
                        </S.RadioButtonContainer>
                        <S.FormLabel>Team type</S.FormLabel>
                    </S.FormItem>

                    <S.FormItem>
                        <TagGenerator getTags={handleGetTags} />
                        <S.FormLabel>Tags</S.FormLabel>
                    </S.FormItem>
                </S.FormContainerColumn>
            </S.FormContainerRow>
            <button onClick={handleCreateNewTeam}>ENVIAR INFO</button>
        </S.MainContainer>
    );
};

export default TeamInformationForm;
