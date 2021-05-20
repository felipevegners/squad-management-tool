import React, { useState } from 'react';

import * as S from './TagGenerator.styles';

const TagGenerator = (): JSX.Element => {
    // const tags = ['attack', 'velocity', 'formation'];
    const [tag, setTag] = useState<string[]>([]);
    const [newTag, setNewTag] = useState('');

    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const handleKeyDown = (e: any) => {
        if ((newTag.length > 0 && e.key === 'Enter') || e.key === ';') {
            setTag([...tag, newTag]);
            setNewTag('');
            e.target.value = '';
        }
    };
    const handChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setNewTag(e.target.value);
    };

    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const handleDeleteTag = (tagToRemove: any): any => {
        const tags = tag.filter((tag) => tag !== tagToRemove);
        setTag(tags);
    };

    return (
        <S.Container>
            {tag.length
                ? tag.map((tag, i) => (
                      <S.Tag key={i}>
                          {tag}
                          <S.DeleteTag onClick={() => handleDeleteTag(tag)} />
                      </S.Tag>
                  ))
                : ''}
            <S.NewTagInput
                type="text"
                onKeyDown={handleKeyDown}
                onChange={handChange}
                size={5}
            />
        </S.Container>
    );
};

export default TagGenerator;
