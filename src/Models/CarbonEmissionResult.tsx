export interface CarbonEmissionResult {
  date: Date,
  carbonG: number,
  carbonLb: number,
  carbonKg: number,
  carbonMt: number,
}

export interface CarbonEmissionResponse {
  id: string,
  type: string,
  attributes: {
    carbon_g: number,
    carbon_kg: number,
    carbon_lb: number,
    carbon_mt: number,
    estimated_at: string, // DateTime
  },
}