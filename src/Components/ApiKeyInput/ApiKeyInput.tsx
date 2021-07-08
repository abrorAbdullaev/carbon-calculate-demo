import React, { useContext } from 'react';
import { Typography, TextField, FormControl, Box } from '@material-ui/core';

import './apiKeyInput.scss';
import { AppActionType, AppContext } from 'src/Store';

export const ApiKeyInput: React.FC = () => {
  const { state, dispatch } = useContext(AppContext);

  return (
    <div className="api-key-input-component content">
      <Typography gutterBottom variant="h4" component="h2" >
        Insert Your Api Key here
      </Typography>
      <Box className="info-text">
        <Typography component="span">
          The API Key can be acquired at <a rel="noreferrer" target="_blank" href="https://www.carboninterface.com/">CarbonInterface</a>
        </Typography>
      </Box>
      <FormControl>
        <TextField 
          id="standard-basic" 
          label="Api Key" 
          value={state.carbonApiKey} 
          onChange={({ target }) => { 
            dispatch({ type: AppActionType.UpdateCarbonApiKey, payload: { key: target.value }}) 
          }} 
        />
      </FormControl>
    </div>
  );
}
