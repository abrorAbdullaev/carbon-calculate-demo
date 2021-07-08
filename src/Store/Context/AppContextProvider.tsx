import { defaultAppContext } from "src/Models";
import React, { useReducer } from "react";

import { AppContext } from './AppContext';
import { appReducer } from "../Reducers";

export const AppContextProvider: React.FC = ({ children }) => {
  const [state, dispatch] = useReducer(appReducer, defaultAppContext);

  return (
    <AppContext.Provider value={{ state, dispatch }}>
      {children}
    </AppContext.Provider>
  );
}