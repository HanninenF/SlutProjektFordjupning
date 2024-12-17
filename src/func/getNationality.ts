import { url } from "../main";

export const getNationality = async (
  stringInput: string
): Promise<{ id: string; probability: number }[]> => {
  const response = await fetch(url + stringInput);
  const data: {
    name: string;
    country: { country_id: string; probability: number }[];
  } = await response.json();

  // Hämta endast land-id från API-responsen
  const nationalities = data.country.map((country) => ({
    id: country.country_id,
    probability: country.probability,
  }));

  return nationalities;
};
