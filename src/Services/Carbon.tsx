import { CarbonEmissionResponse } from "src/Models";

export const calculateElictrictyEstimate: (electricity: number, location: string, key: string) => Promise<{ data: CarbonEmissionResponse }> = (electricity, location, key) => {
  return fetch('https://www.carboninterface.com/api/v1/estimates', {
    method: 'POST',
    body: JSON.stringify({
      "type": "electricity",
      "electricity_unit": "mwh",
      "electricity_value": electricity,
      "country": location,
    }),
    headers: {
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${key}`
    },
  }).then((resp) => resp.json());
};
