// src/components/ResultsDisplay.tsx
"use client";

import { css } from "../../styled-system/css";

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
      <div
        className={css({
          backgroundColor: "white",
          padding: "2rem",
          borderRadius: "lg",
          boxShadow: "md",
        })}
      >
        <h2
          className={css({
            fontSize: "2xl",
            fontWeight: "semibold",
            marginBottom: "1.5rem",
            color: "green.700",
          })}
        >
          Ordem da "roubalheira"
        </h2>
        <p className={css({ color: "gray.500", fontStyle: "italic" })}>
          A ordem do sorteio aparecerá aqui...
        </p>
      </div>
    );
  }

  return (
    <div
      className={css({
        backgroundColor: "white",
        padding: "2rem",
        borderRadius: "lg",
        boxShadow: "md",
      })}
    >
      <h2
        className={css({
          fontSize: "2xl",
          fontWeight: "semibold",
          marginBottom: "1.5rem",
          color: "green.700",
        })}
      >
        Ordem da "roubalheira"
      </h2>
      <ol
        className={css({
          listStyle: "none",
          padding: "0",
          color: "gray.800",
        })}
      >
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
            <li
              key={index}
              className={css({
                fontSize: "lg",
                padding: "0.75rem 0",
                borderBottom: "1px solid",
                borderColor: "gray.200",
                _last: {
                  borderBottom: "none",
                },
                display: "flex",
                flexDirection: "column",
              })}
            >
              <span
                className={css({
                  fontWeight: "bold",
                  color: "red.700",
                  fontSize: "md",
                })}
              >
                {index + 1}º - {title}
              </span>
              <span className={css({ paddingTop: "0.25rem" })}>
                {name}
              </span>
            </li>
          );
        })}
      </ol>
    </div>
  );
};
