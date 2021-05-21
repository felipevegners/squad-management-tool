import React from 'react';
import TagGenerator from '../../Components/TagGenerator/TagGenerator';

import * as S from './TeamInformationForm.styles';

const TeamInformationForm = (): JSX.Element => {
    return (
        <S.MainContainer>
            <S.Title>Team Information</S.Title>
            <S.StyledForm>
                <S.FormContainer gridArea="left">
                    <S.FormItem>
                        <S.FormLabel>Team Name</S.FormLabel>
                        <S.StyledInput
                            placeholder="Insert your team name"
                            name="team-name"
                        />
                    </S.FormItem>
                    <S.FormItem>
                        <S.FormLabel>Description</S.FormLabel>
                        <S.StyledTextArea
                            placeholder="Insert your team description"
                            name="team-description"
                            rows={8}
                        />
                    </S.FormItem>
                </S.FormContainer>

                <S.FormContainer gridArea="right">
                    <S.FormItem>
                        <S.FormLabel>Team website</S.FormLabel>
                        <S.StyledInput
                            type="url"
                            placeholder="https://www.yourteam.com"
                            name="team-name"
                            required
                        />
                    </S.FormItem>
                    <S.FormItem>
                        <S.FormLabel>Team type</S.FormLabel>
                    </S.FormItem>
                    <S.FormItemRadio>
                        <S.StyledInputRadio
                            type="radio"
                            name="radio-group"
                            value="real"
                            id="real"
                        />
                        <S.FormLabel htmlFor="real">Real</S.FormLabel>
                        <S.StyledInputRadio
                            type="radio"
                            name="radio-group"
                            value="fantasy"
                            id="fantasy"
                        />
                        <S.FormLabel htmlFor="fantasy">Fantasy</S.FormLabel>
                    </S.FormItemRadio>
                    <S.FormItem>
                        <S.FormLabel>Tags</S.FormLabel>
                        <TagGenerator />
                    </S.FormItem>
                </S.FormContainer>
            </S.StyledForm>
        </S.MainContainer>
    );
};

export default TeamInformationForm;
