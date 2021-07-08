import { AppActions, AppActionType } from "src/Store";
import { calculateElictrictyEstimate } from 'src/Services';
import { CarbonEmissionResponse, UserElectricityMetrics } from "src/Models";

export const CalculateCarbonEffect: (dispatch: React.Dispatch<AppActions>, userData: UserElectricityMetrics[], apiKey: string) => AppActions = (dispatch, userData, apiKey) => {
  userData.forEach(async (userData) => {
    await calculateElictrictyEstimate(userData.usage, userData.location, apiKey)
      .then((result: { data: CarbonEmissionResponse, message?: string }) => {
        // @TODO Not really happy with the way how Fetch is handling errors
        // Even if the error case happens this method is being reached, which makes sense as the error
        // response is still a response. Neet to find a way to treat only 200/201 response codes as correct
        // and throw error on all other codes
        if (result.message) { throw new Error(result.message) } // Error case @temporary

        // Uncomment if mock data is needed
        // result = { 
        //   data: {
        //     id: '',
        //     type: 'erstimate',
        //     attributes: {
        //       carbon_g: 100,
        //       carbon_kg: 300,
        //       carbon_lb: 100,
        //       carbon_mt: 100,
        //       estimated_at: ''
        //     }
        //   }
        // };

        dispatch({
          type: AppActionType.CalculateDataSucceed, 
          payload: {
            date: userData.date,
            carbonG: result.data.attributes.carbon_g,
            carbonKg: result.data.attributes.carbon_kg,
            carbonLb: result.data.attributes.carbon_lb,
            carbonMt: result.data.attributes.carbon_mt,
          }
        });
      })
      .catch((err) => {
        // @TODO Make propper error handling, 
        // Show popover message with the error text
        // Remove Console.log when error handling is implemented
        console.log(err);
         
        dispatch({
          type: AppActionType.CalculateDataFailed,
        });
      });
  });
  
  return {
    type: AppActionType.CalculateWeeklyData,
  };
};