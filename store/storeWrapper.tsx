import React, { ReactNode } from 'react';
import { Provider } from 'react-redux';
import { store } from '$/store';

interface StoreWrapperProps {
  children: ReactNode;
}

const StoreWrapper: React.FC<StoreWrapperProps> = ({ children }) => {
  return <Provider store={store}>{children}</Provider>;
};

export default StoreWrapper;
