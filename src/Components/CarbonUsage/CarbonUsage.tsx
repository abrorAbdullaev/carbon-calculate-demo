import React, { useContext } from 'react';
import { Bar, Chart } from 'react-chartjs-2';

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
      <h1>You Carbon Emission Results!</h1>
      { !state.carbonCalculationLoading && <Bar data={chartData} type="bar" /> }
    </div>
  );
}
