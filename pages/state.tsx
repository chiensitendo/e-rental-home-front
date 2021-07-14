import { createContext, useContext } from 'react';

const AppContext = createContext({
  calling: function(){}
});

export function AppWrapper({ children }) {

  function get(){
    console.log("OK");
  }

  let sharedState = {
    calling: get
  }

  return (
    <AppContext.Provider value={sharedState}>
      {children}
    </AppContext.Provider>
  );
}

export function useAppContext() {
  return useContext(AppContext);
}