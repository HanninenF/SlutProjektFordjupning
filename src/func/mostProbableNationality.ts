import { getNationality } from "./getNationality";

export const mostProbableNationality = async (
  stringInput: string
): Promise<{ nation: string; probability: number }> => {
  const possibleNationalities = await getNationality(stringInput);
  let nationalities: string[] = [];
  let probabilities: number[] = [];
  possibleNationalities.forEach((nationality) => {
    nationalities.push(nationality.id);
    probabilities.push(nationality.probability);
  });
  console.log(
    "nationalities: ",
    nationalities,
    "\n",
    "probabilities: ",
    probabilities
  );
  const rounded = Math.round(probabilities[0] * 100);
  const mostProb = {
    nation: nationalities[0],
    probability: rounded,
  };
  return mostProb;
};
