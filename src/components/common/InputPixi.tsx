import React, { ChangeEvent, useState } from 'react';
import { useDebounceCallback } from '@react-hook/debounce';
import { InputConfigItemType } from '../../store/config/types';

const InputPixi = ({ config }: { config: InputConfigItemType }) => {
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
    <label>
      {title}
      <input type="text" value={val} required onChange={onChangeInternal} />
    </label>
  );
};

export default InputPixi;
