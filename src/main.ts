import { mostProbableNationality } from "./func/mostProbableNationality";
import { getNationButton, nameInput, divElement } from "./domElements";
import "./styles/style.scss";

export const url: string = "https://api.nationalize.io/?name=";

getNationButton.addEventListener("click", (event) => {
  event.preventDefault();
  mostProbableNationality(nameInput.value).then((result) => {
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
