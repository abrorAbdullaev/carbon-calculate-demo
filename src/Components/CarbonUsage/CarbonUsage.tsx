import React, { useContext } from 'react';
import { Grid, Typography } from '@material-ui/core';
import { Bar, Chart, Pie } from 'react-chartjs-2';

import './carbonUsage.scss';
import { AppContext } from 'src/Store';

export const CarbonUsage: React.FC = () => {
  Chart.defaults.color = '#95d5b2';

  const { state } = useContext(AppContext);
  const calculationResultsSorted = state.carbonCalculationResults.sort((o1, o2) => o1.date.getTime() - o2.date.getTime());

  const chartData = {
    labels: calculationResultsSorted.map((result) => result.date.toDateString()),
    datasets: [{
      data: calculationResultsSorted.map((result) => result.carbonKg),
      label: 'Carbon Emission in Kg',
      backgroundColor: '#95d5b2',
    }],
  }

  return (
    <div className="carbon-usage-component content">
      <Grid container spacing={3}>
        <Grid item xs={12}>
          <Typography variant="h4" component="h2" gutterBottom>You Carbon Emission Results!</Typography>
        </Grid>
        { !state.carbonCalculationLoading &&
          <>
            <Grid item xs={6}>
              <Bar data={chartData} type="bar" />
            </Grid>
            <Grid item xs={6}>
              <Pie style={{ marginBottom: '10px' }} data={chartData} type="pie" />
              <Typography align="center">Total: {calculationResultsSorted.map((result) => result.carbonKg).reduce((val, newVal) => val + newVal)} kg</Typography>
            </Grid>
          </>
        }
      </Grid>
    </div>
  );
}
