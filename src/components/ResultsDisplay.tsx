"use client";

import {
  resultsContainer,
  resultsList,
  resultsListItem,
  resultsListItemName,
  resultsListItemPosition,
  resultsPlaceholder,
  resultsTitle,
} from "./ResultsDisplay.styles";

interface ResultsDisplayProps {
  shuffledNames: string[];
}

const positionTitles = [
  "O Rei do Jogo",
  "O Estrategista",
  "O Olho de Lince",
  "O Mão Leve",
  "O Sortudo",
];

export const ResultsDisplay = ({ shuffledNames }: ResultsDisplayProps) => {
  if (shuffledNames.length === 0) {
    return (
      <div className={resultsContainer}>
        <h2 className={resultsTitle}>Ordem da "roubalheira"</h2>
        <p className={resultsPlaceholder}>
          A ordem do sorteio aparecerá aqui...
        </p>
      </div>
    );
  }

  return (
    <div className={resultsContainer}>
      <h2 className={resultsTitle}>Ordem da "roubalheira"</h2>
      <ol className={resultsList}>
        {shuffledNames.map((name, index) => {
          let title = "";
          if (
            index === shuffledNames.length - 1 &&
            shuffledNames.length > 1
          ) {
            title = "O Azarado";
          } else if (index < positionTitles.length) {
            title = positionTitles[index];
          } else {
            title = "Pelotão do Meio";
          }

          return (
            <li key={index} className={resultsListItem}>
              <span className={resultsListItemPosition}>
                {index + 1}º - {title}
              </span>
              <span className={resultsListItemName}>{name}</span>
            </li>
          );
        })}
      </ol>
    </div>
  );
};
