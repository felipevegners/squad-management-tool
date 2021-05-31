import React, { InputHTMLAttributes, useEffect, useState } from 'react';

import * as S from './TagGenerator.styles';

interface IGetTags {
    getTags(params: string[]): void;
}

const TagGenerator = ({ getTags }: IGetTags): JSX.Element => {
    const [tag, setTag] = useState<string[]>([]);
    const [newTag, setNewTag] = useState('');
    const [tagWarn, setTagWarn] = useState(false);
    const [tagWarnExists, setTagWarnExists] = useState(false);

    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const handleKeyDown = (e: any): void => {
        e.stopPropagation();
        const { key } = e;
        const { value } = e.target;
        if (
            key === 'Enter' &&
            value.length > 1 &&
            value !== '' &&
            !/\s/.test(newTag)
        ) {
            e.preventDefault();
            if (tag.indexOf(newTag) === -1) {
                setTag([...tag, newTag]);
                // passing tags to parent (form)
                getTags([...tag, newTag]);
                e.target.value = '';
            } else {
                e.preventDefault();
                setTagWarn(true);
                setTagWarnExists(true);
                setTimeout(() => {
                    setTagWarn(false);
                    setTagWarnExists(false);
                }, 5000);
            }
        } else if (key === 'Enter') {
            e.preventDefault();
            setTagWarn(true);
            setTimeout(() => {
                setTagWarn(false);
            }, 5000);
            e.target.value = '';
        }
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
            data-content={
                tagWarnExists
                    ? 'Tag already inserted. Try a new tag!'
                    : 'Invalid Tag format'
            }
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
                onChange={(e) => setNewTag(e.target.value)}
                size={5}
                id="inputTag"
            />
        </S.Container>
    );
};

export default TagGenerator;
