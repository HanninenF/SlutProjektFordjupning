import { mostProbableNationality } from "./func/mostProbableNationality";
import "./styles/style.scss";

export const url: string = "https://api.nationalize.io/?name=";

const getNationButton = document.querySelector(
  "#get-nation"
) as HTMLButtonElement;
const nameInput = document.querySelector("#name-input ") as HTMLInputElement;

getNationButton.addEventListener("click", (event) => {
  event.preventDefault();
  mostProbableNationality(nameInput.value).then((result) => {
    const divElement = document.querySelector("#app") as HTMLElement;
    let pElement = divElement.querySelector(
      "#nationality-result"
    ) as HTMLParagraphElement;
    if (!pElement) {
      pElement = document.createElement("p") as HTMLParagraphElement;
      pElement.id = "nationality-result";

      divElement.appendChild(pElement);
    }
    pElement.textContent = `Country: ${result.nation}\nProbability: ${result.probability}%`;
  });
});

/* mostProbableNationality("Johnson").then((result) => {
  console.log(`country: ${result.nation}, probability: ${result.probability}%`);
}); */
