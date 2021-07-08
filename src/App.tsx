import { useReducer } from 'react';
import { ThemeProvider, LinearProgress } from '@material-ui/core';

import './App.scss';
import { AppContext, appReducer } from 'src/Store';
import { defaultAppContext } from 'src/Models';
import { Header, DatePicker, ApiKeyInput, CarbonUsage } from 'src/Components';
import { UsageCalculate, } from './Components/UsageCalculate/UsageCalculate';
import { getAppTheme } from './Utils/MaterialUi';

function App() {
  const [state, dispatch] = useReducer(appReducer, defaultAppContext);

  return (
    <AppContext.Provider value={{ state, dispatch }}>
      <ThemeProvider theme={getAppTheme()}>
        <div className="App">
          <Header />
          <ApiKeyInput />
          <DatePicker />
          <UsageCalculate data={state.data} />
          { state.carbonCalculationLoading && 
            <div className="content">
              <LinearProgress />
            </div> 
          }
          { !!state.carbonCalculationResults.length && <CarbonUsage /> }
        </div>
      </ThemeProvider>
    </AppContext.Provider>
  );
}

export default App;
