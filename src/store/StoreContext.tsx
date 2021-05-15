import React from 'react';
import { useLocalStore } from 'mobx-react-lite';
import ObservableStore from './ObservableStore';
import { StoreType } from './config/types';

const StoreContext = React.createContext<StoreType>(new ObservableStore());

const StoreProvider = ({ children }: { children: React.ReactNode }) => {
  const store = useLocalStore<StoreType>(() => new ObservableStore());

  return <StoreContext.Provider value={store}>{children}</StoreContext.Provider>;
};

const useStore = () => React.useContext(StoreContext);

export { useStore, StoreProvider };
export default StoreContext;
