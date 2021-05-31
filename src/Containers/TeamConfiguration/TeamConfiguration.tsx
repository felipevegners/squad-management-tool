import React, { useCallback, useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { RouteComponentProps, useParams } from 'react-router-dom';
import Card from '../../Components/Card/Card';
import { Button } from '../../Components/Button/Button.styles';
import FieldConfig from '../../Components/FieldConfig/FieldConfig';
import SearchPlayer from '../../Components/SearchPlayer/SearchPlayer';
import TagGenerator from '../../Components/TagGenerator/TagGenerator';

import { rootStore } from '../../store/store';
import { teamActions } from '../../store/CreateTeam/actions';

import * as S from './TeamConfiguration.styles';

interface RouteParams {
    id: string;
}

// eslint-disable-next-line @typescript-eslint/no-empty-interface
interface Management extends RouteComponentProps<RouteParams> {}

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const TeamConfiguration: React.FC<Management> = () => {
    const dispatch = useDispatch();
    const params = useParams<RouteParams>();
    const teamsState = useSelector((state: rootStore) => state.teams);

    const id = parseInt(params.id);
    const { teams } = teamsState;

    console.log('edit ==>', teams[id]);

    const initialState = () => {
        if (teams && teams[id]) {
            return { ...teams[id] };
        }

        return {
            name: '',
            description: '',
            website: '',
            type: '',
            tags: [],
            configuration: '',
            lines: [],
        };
    };

    const [teamConfig, setTeamConfig] = useState(initialState());

    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const handleSubmit = (e: any) => {
        e.preventDefault();
        dispatch(teamActions.createNewTeam({ ...teamConfig }));
    };

    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const handleChange = (e: any) => {
        const { name, value } = e.target;
        setTeamConfig({
            ...teamConfig,
            [name]: value,
        });
    };

    // eslint-disable-next-line @typescript-eslint/no-explicit-any
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

    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const handleGetTags = (tags: any) => {
        setTeamConfig({
            ...teamConfig,
            tags: tags,
        });
    };

    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const handleGetConfig = (config: any) => {
        setTeamConfig({
            ...teamConfig,
            configuration: config.configuration,
            lines: config.lines,
        });
    };

    return (
        <S.MainContainer className="barretos">
            <Card title="Create your team" content="">
                <S.Title>Team Information</S.Title>
                <form onSubmit={handleSubmit}>
                    <S.FormContainerRow>
                        <S.FormContainerColumn gridArea="left">
                            <S.FormItem>
                                <S.StyledInput
                                    type="text"
                                    placeholder="Insert your team name"
                                    name="name"
                                    value={teamConfig?.name}
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
                                    value={teamConfig?.description}
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
                                    value={teamConfig?.website}
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
                                        checked={teamConfig.type === 'real'}
                                        required
                                    />
                                    <S.FormLabel htmlFor="real">
                                        Real
                                    </S.FormLabel>
                                    <S.StyledInputRadio
                                        type="radio"
                                        name="type"
                                        value="fantasy"
                                        id="fantasy"
                                        onChange={handleChange}
                                        checked={teamConfig.type === 'fantasy'}
                                        required
                                    />
                                    <S.FormLabel htmlFor="fantasy">
                                        Fantasy
                                    </S.FormLabel>
                                    <span>Select a team type</span>
                                </S.RadioButtonContainer>
                                <S.FormLabel>Team type</S.FormLabel>
                            </S.FormItem>

                            <S.FormItem>
                                <S.FormLabel>Tags</S.FormLabel>
                            </S.FormItem>

                            <TagGenerator
                                getTags={handleGetTags}
                                tags={teamConfig.tags}
                            />
                        </S.FormContainerColumn>
                    </S.FormContainerRow>
                    <S.Title>Configure Squad</S.Title>
                    <S.FormContainerRow>
                        <S.FormContainerColumn gridArea="left">
                            <FieldConfig
                                getConfig={handleGetConfig}
                                config={teamConfig.configuration}
                                lines={teamConfig.lines}
                            />
                            <Button
                                marginTop="20px"
                                width="100%"
                                height="40px"
                                fontSize="20px"
                                borderRad="6px"
                                type="submit"
                            >
                                Save
                            </Button>
                        </S.FormContainerColumn>
                        <S.FormContainerColumn gridArea="right">
                            <SearchPlayer />
                        </S.FormContainerColumn>
                    </S.FormContainerRow>
                </form>
            </Card>
        </S.MainContainer>
    );
};

export default TeamConfiguration;