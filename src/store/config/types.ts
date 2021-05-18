type ItemType = {
  id: string;
  type: string;
  title: string;
  current: string | number;
};

type ConfigItemType<T> = ItemType & {
  current: T;
  format?: (val: T) => string;
  onChange?: (val: T) => void;
};

type SliderConfigItemType = ConfigItemType<number> & {
  type: 'slider';
  minVal: number;
  maxVal: number;
  step: number;
};

type DropdownConfigItemType<T> = ConfigItemType<T> & {
  type: 'dropdown';
  options: Array<T>;
};

type InputConfigItemType = ConfigItemType<string> & {
  type: 'input';
};

type StoreType = {
  screen: { width: number; height: number };
  branch: { defaultLen: number; width: number };
  stroke: SliderConfigItemType;
  angle: SliderConfigItemType;
  branchCount: SliderConfigItemType;
  branchLenCoef: SliderConfigItemType;
  deep: SliderConfigItemType;
  text: InputConfigItemType;
  readonly sliders: Array<SliderConfigItemType>;
  readonly texts: Array<InputConfigItemType>;
  readonly config: ConfigProps;
};

interface ConfigProps {
  stroke: number;
  angle: number;
  branchCount: number;
  branchLenCoef: number;
  deep: number;
}

export type {
  ItemType,
  ConfigItemType,
  SliderConfigItemType,
  DropdownConfigItemType,
  InputConfigItemType,
  StoreType,
  ConfigProps,
};
