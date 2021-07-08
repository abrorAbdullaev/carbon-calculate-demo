import { AppActions, AppActionType } from "src/Store";
// import { calculateElictrictyEstimate } from 'src/Services';
import { CarbonEmissionResponse, UserElectricityMetrics } from "src/Models";

export const CalculateCarbonEffect: (dispatch: React.Dispatch<AppActions>, userData: UserElectricityMetrics[], apiKey: string) => AppActions = (dispatch, userData, apiKey) => {
  userData.forEach(async (userData) => {
    // const result: { data: CarbonEmissionResponse } = await calculateElictrictyEstimate(userData.usage, userData.location, apiKey).then((resp) => resp.json());
    
    const resultMock: { data: CarbonEmissionResponse } = await new Promise((resolve) => {
        resolve({ data: {
          id: '',
          type: 'erstimate',
          attributes: {
            carbon_g: 100,
            carbon_kg: 300,
            carbon_lb: 100,
            carbon_mt: 100,
            estimated_at: ''
          }
        }
      });
    });

    dispatch({
      type: AppActionType.CalculateDataFinished, 
      payload: {
        date: userData.date,
        carbonG: resultMock.data.attributes.carbon_g,
        carbonKg: resultMock.data.attributes.carbon_kg,
        carbonLb: resultMock.data.attributes.carbon_lb,
        carbonMt: resultMock.data.attributes.carbon_mt,
      }
    });
  });
  
  return {
    type: AppActionType.CalculateWeeklyData,
  };
};