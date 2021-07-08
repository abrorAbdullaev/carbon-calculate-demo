import { AppContextInterface } from 'src/Models';
import { AppActions, AppActionType } from 'src/Store';

export const appReducer = (state: AppContextInterface, action: AppActions): AppContextInterface => {
  switch (action.type) {
    case AppActionType.UpdateUserData: {
      const data = state.data;
      const userDataInd = data.findIndex((userData) => userData.date === action.payload.date);

      data[userDataInd] = {
        ...data[userDataInd],
        [action.payload.field]: action.payload.value,
      }

      return { ...state, data, };
    }

    case AppActionType.UpdateCarbonApiKey: {
      return {...state, carbonApiKey: action.payload.key}
    }

    case AppActionType.CalculateWeeklyData: {
      return { ...state, carbonCalculationLoading: true, };
    }

    case AppActionType.CalculateDataFinished: {
      const carbonData = state.carbonCalculationResults;
      const existingInd = carbonData.findIndex((data) => data.date === action.payload.date);

      existingInd >= 0 ? carbonData[existingInd] = action.payload : carbonData.push(action.payload);

      return { ...state, carbonCalculationLoading: false, };
    }

    default:
    return state;
  }
}