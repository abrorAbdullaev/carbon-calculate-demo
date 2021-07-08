import React, { useContext } from 'react';
import { Button, Tooltip } from '@material-ui/core';

import './usageCalculate.scss';
import { UserElectricityMetrics } from 'src/Models';
import { AppContext, CalculateCarbonEffect } from 'src/Store';

export const UsageCalculate: React.FC<{ data: UserElectricityMetrics[] }> = ({ data }) => {
  const { state, dispatch } = useContext(AppContext);
  const disabled: boolean = !state.carbonApiKey || data.some((userData) => !userData.location || !userData.usage);

  return (
    <div className='usage-calculate-component content'>
      {/* Core Issue by Material UI, the tooltip will cause an error in conosle, but doesn't block the behaviouir */}
      {/* https://github.com/mui-org/material-ui/issues/13394 */}
      <Tooltip title={disabled ? `Not all dates are filled, please fill missing information` : ''} arrow >
        <span>
          <Button variant='contained' color='primary' disabled={disabled} onClick={() => dispatch(CalculateCarbonEffect(dispatch, state.data, 'K0DC9ahVchblZpgzT7Jg'))}>
            Calculate
          </Button>
        </span>
      </Tooltip>
    </div>    
  );
}
