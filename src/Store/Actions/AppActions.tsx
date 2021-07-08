import { CarbonEmissionResult, UserElectricityMetrics } from "src/Models";

export enum AppActionType {
  UpdateUserData,
  UpdateCarbonApiKey,
  CalculateWeeklyData,
  CalculateDataSucceed,
  CalculateDataFailed,
}

export interface UpdateUserData {
  type: AppActionType.UpdateUserData,
  payload: { 
    date: Date,
    field: keyof UserElectricityMetrics,
    value: string | number,
  }
}

export interface UpdateCarbonApiKey {
  type: AppActionType.UpdateCarbonApiKey,
  payload: { key: string }
}

export interface CalculateWeeklyData {
  type: AppActionType.CalculateWeeklyData,
}

export interface CalculateDataSucceed {
  type: AppActionType.CalculateDataSucceed,
  payload: CarbonEmissionResult,
}

export interface CalculateDataFailed {
  type: AppActionType.CalculateDataFailed,
}

export type AppActions = UpdateUserData | CalculateWeeklyData | CalculateDataSucceed | UpdateCarbonApiKey | CalculateDataFailed;
