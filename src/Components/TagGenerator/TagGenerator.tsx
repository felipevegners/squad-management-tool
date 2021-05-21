import React, { useState } from 'react';

import * as S from './TagGenerator.styles';

const TagGenerator = (): JSX.Element => {
    const [tag, setTag] = useState<string[]>([]);
    const [newTag, setNewTag] = useState('');
    const [tagWarn, setTagWarn] = useState(false);

    // check if the inputed tag text have spaces or is empty
    // show warn or set the new tag

    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const handleKeyDown = (e: any) => {
        if ((newTag.length > 0 && e.code === 'Enter') || e.code === ';') {
            if (/\s/.test(newTag)) {
                setTagWarn(true);
                setTimeout(() => {
                    setTagWarn(false);
                }, 5000);
                e.target.value = '';
            } else {
                setTag([...tag, newTag]);
                setTagWarn(false);
                setNewTag('');
                e.target.value = '';
            }
        }
    };
    const handChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setNewTag(e.target.value);
    };

    const handleDeleteTag = (tagToRemove: string): void => {
        const tags = tag.filter((tag) => tag !== tagToRemove);
        setTag(tags);
    };

    const handleInputFocus = () => {
        const inputEl = document.getElementById('inputTag');
        inputEl?.focus();
    };

    return (
        <S.Container
            className={tagWarn ? 'tag-warn' : ''}
            onClick={handleInputFocus}
        >
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
                id="inputTag"
            />
        </S.Container>
    );
};

export default TagGenerator;
