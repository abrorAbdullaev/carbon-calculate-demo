export const calculateElictrictyEstimate: (electricity: number, location: string, key: string) => Promise<Response> = (electricity, location, key) => {
  // @TODO Either pass the key to env variable or make it configurable from front end
  // For testing its fine to keep here exposed

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
  });
};
