import React, { ChangeEvent, useState } from 'react';
import { SliderConfigItemType } from '../../store/config/types';

const SliderPixi = ({ config }: { config: SliderConfigItemType }) => {
  const { minVal, maxVal, step, title, animatable, format, current } = config;
  const [val, setVal] = useState<number>(current);

  const onChangeInternal = (event: ChangeEvent<HTMLInputElement>) => {
    const newVal = parseFloat(event.target.value);
    setVal(newVal);
    if (config.onChange) {
      config.onChange(newVal);
    }
  };

  return (
    <>
      <label>
        {animatable && (
          <span>
            <label>
              <input type="checkbox" />
            </label>
          </span>
        )}
        {title.replace('%value', format ? format(val) : val.toString())}
        <input
          type="range"
          min={minVal}
          max={maxVal}
          step={step}
          value={val}
          onChange={onChangeInternal}
        />
      </label>
    </>
  );
};

export default SliderPixi;
