import React from 'react';
import { useLocalObservable } from 'mobx-react';
import defaultStore from './defaultConfig';
import { StoreType } from './config/types';

const StoreContext = React.createContext<StoreType>(defaultStore);

const StoreProvider = ({ children }: { children: React.ReactNode }) => {
  const store = useLocalObservable<StoreType>(() => ({
    ...defaultStore,
  }));

  return <StoreContext.Provider value={store}>{children}</StoreContext.Provider>;
};

export { StoreProvider };
export default StoreContext;
