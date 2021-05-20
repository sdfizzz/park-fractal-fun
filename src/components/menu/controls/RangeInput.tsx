import React, { ChangeEvent, useState } from 'react';
import { useDebounceCallback } from '@react-hook/debounce';
import styled from 'styled-components';
import { SliderConfigItemType } from '../../../store/config/types';
import InputContainer from './common';

const Label = styled.label`
  ${InputContainer}
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
  cursor: grabbing;

  &:hover {
    opacity: 1;
  }

  &::-webkit-slider-thumb {
    appearance: none;
    cursor: grabbing;
    border-radius: 12px;
    width: 15px;
    height: 15px;
    background: rgba(156, 156, 161, 1);
  }

  &::-moz-range-thumb {
    appearance: none;
    cursor: grabbing;
    border-radius: 12px;
    width: 15px;
    height: 15px;
    background: rgba(156, 156, 161, 1);
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
