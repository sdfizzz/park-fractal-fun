import React, { ChangeEvent, useState } from 'react';
import { useDebounceCallback } from '@react-hook/debounce';
import styled from 'styled-components';
import { SliderConfigItemType } from '../../../store/config/types';

const Label = styled.label`
  display: grid;
  grid-template-columns: 100px 1fr;
`;

const StyledInput = styled.input`
  padding: 0.25em 0.5em;
  border: 0.5px solid #787878;
  box-shadow: 0 1px 2px rgba(0, 0, 0, 0.15);
  border-radius: 4px;
  background: rgba(98, 98, 100, 1);
  outline: none;
  opacity: 0.7;
  transition: opacity 0.2s;
  appearance: none;

  &:hover {
    opacity: 1;
    cursor: grabbing;
  }
`;

const RangeInput = ({ config }: { config: SliderConfigItemType }) => {
  const { minVal, maxVal, step, title, format, current } = config;
  const [val, setVal] = useState<number>(current);

  const debouncedRedrawOnChange = useDebounceCallback((value: number) => {
    if (config.onChange) {
      config.onChange(value);
    }
  });

  const onChangeInternal = (event: ChangeEvent<HTMLInputElement>) => {
    const newVal = parseFloat(event.target.value);
    setVal(() => newVal);
    debouncedRedrawOnChange(newVal);
  };

  return (
    <Label>
      <span>{title.replace('%value', format ? format(val) : val.toString())}</span>
      <StyledInput
        type="range"
        min={minVal}
        max={maxVal}
        step={step}
        value={val}
        onChange={onChangeInternal}
      />
    </Label>
  );
};

export default RangeInput;
