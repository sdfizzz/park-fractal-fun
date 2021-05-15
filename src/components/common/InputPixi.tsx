import React, { ChangeEvent, useState } from 'react';
import styled from 'styled-components';
import { InputConfigItemType } from '../../store/config/types';

const InputPixi = ({ config }: { config: InputConfigItemType }) => {
  const { title, current } = config;
  const [val, setVal] = useState(current);

  const onChangeInternal = (event: ChangeEvent<HTMLInputElement>) => {
    setVal(event.target.value);
    if (config.onChange) config.onChange(event.target.value);
  };

  return (
    <label>
      {title}
      <input type="text" value={val} required onChange={onChangeInternal} />
    </label>
  );
};

export default InputPixi;
