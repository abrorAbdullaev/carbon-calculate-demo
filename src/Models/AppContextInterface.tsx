import { CarbonEmissionResult } from './CarbonEmissionResult';
import { UserElectricityMetrics } from './UserElectricityMetrics';

/**
 * Generates the initial 7 days user data with empty fields
 * Used to initiate the state
 * 
 * @TODO Implement the possibility to save the data so that after refersh it would rehydrate instead of generate new
 * 
 * @returns UserElectricityMetrics[]
 */
const generateWeek: () => UserElectricityMetrics[] = () => {
  const data: UserElectricityMetrics[] = [];
  let date: Date = new Date();
  let day = 60 * 60 * 24 * 1000;

  for (var i = 0; i <= 2; i++) {
    data.push({
      date: new Date(date.getTime() + day * i),
      location: 'de', // Let DE to be default
      usage: 0,
    });
  }

  return data;
}

export interface AppContextInterface  { 
  data: UserElectricityMetrics[];
  carbonCalculationResults: CarbonEmissionResult[];
  carbonCalculationLoading: boolean;
  carbonApiKey: string;
}

export const defaultAppContext: AppContextInterface = {
  data: generateWeek(),
  carbonCalculationResults: [],
  carbonCalculationLoading: false,
  carbonApiKey: '',
}
