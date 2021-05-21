import React from 'react';
import { configure } from 'mobx';
import { useLocalObservable } from 'mobx-react-lite';
import ObservableStore from './ObservableStore';
import { StoreType } from './config/types';

configure({
  enforceActions: 'never',
});

const StoreContext = React.createContext<StoreType>(new ObservableStore(0, 0));

const StoreProvider = ({
  canvasSize,
  children,
}: {
  canvasSize: { w: number; h: number };
  children: React.ReactNode;
}) => {
  const store = useLocalObservable<StoreType>(
    () => new ObservableStore(canvasSize.w, canvasSize.h)
  );
  return <StoreContext.Provider value={store}>{children}</StoreContext.Provider>;
};

const useStore = () => React.useContext(StoreContext);

export { useStore, StoreProvider };
export default StoreContext;
