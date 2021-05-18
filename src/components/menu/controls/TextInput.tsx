import React, { ChangeEvent, useState } from 'react';
import styled from 'styled-components';
import { useDebounceCallback } from '@react-hook/debounce';
import { InputConfigItemType } from '../../../store/config/types';

const Label = styled.label`
  display: grid;
  grid-template-columns: 100px 1fr;
`;

const Input = styled.input`
  padding: 0.25em 0.5em;
  background: rgba(98, 98, 100, 1);
  border: 2px solid var(--input-border);
  border-radius: 4px;
  transition: 180ms box-shadow ease-in-out;

  &:focus {
    border-color: hsl(var(--input-focus-h), var(--input-focus-s), var(--input-focus-l));
    box-shadow: 0 0 0 3px
      hsla(var(--input-focus-h), var(--input-focus-s), calc(var(--input-focus-l) + 40%), 0.8);
    outline: 3px solid transparent;
    background: white;
  }

  &:hover {
    background-color: lightsteelblue;
    cursor: pointer;
  }
`;

const TextInput = ({ config }: { config: InputConfigItemType }) => {
  const { title, current } = config;
  const [val, setVal] = useState<string>(current);

  const debounceOnChange = useDebounceCallback((value: string) => {
    if (config.onChange) config.onChange(value);
  });

  const onChangeInternal = (event: ChangeEvent<HTMLInputElement>) => {
    const { value } = event.target;
    setVal(value);
    debounceOnChange(value);
  };

  return (
    <Label>
      <span>{title}</span>
      <Input type="text" value={val} required onChange={onChangeInternal} />
    </Label>
  );
};

export default TextInput;
