import { AppActions, AppActionType } from "src/Store";
import { calculateElictrictyEstimate } from 'src/Services';
import { CarbonEmissionResponse, UserElectricityMetrics } from "src/Models";

export const CalculateCarbonEffect: (dispatch: React.Dispatch<AppActions>, userData: UserElectricityMetrics[], apiKey: string) => AppActions = (dispatch, userData, apiKey) => {
  userData.forEach(async (userData) => {
    const result: { data: CarbonEmissionResponse } = await calculateElictrictyEstimate(userData.usage, userData.location, apiKey).then((resp) => resp.json());
    
    dispatch({ 
      type: AppActionType.CalculateDataFinished, 
      payload: {
        date: userData.date,
        carbonG: result.data.attributes.carbon_g,
        carbonKg: result.data.attributes.carbon_kg,
        carbonLb: result.data.attributes.carbon_lb,
        carbonMt: result.data.attributes.carbon_mt,
      }
    });

  });
  
  return {
    type: AppActionType.CalculateWeeklyData,
  };
};