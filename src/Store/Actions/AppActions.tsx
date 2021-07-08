import { CarbonEmissionResult, UserElectricityMetrics } from "src/Models";

export enum AppActionType {
  UpdateUserData,
  UpdateCarbonApiKey,
  CalculateWeeklyData,
  CalculateDataFinished,
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

export interface CalculateDataFinished {
  type: AppActionType.CalculateDataFinished,
  payload: CarbonEmissionResult,
}

export type AppActions = UpdateUserData | CalculateWeeklyData | CalculateDataFinished | UpdateCarbonApiKey;
