"use client";

import { useState } from "react";
import { css } from "../../styled-system/css";

export default function Home() {
  const [names, setNames] = useState("");
  const [shuffledNames, setShuffledNames] = useState<string[]>([]);

  const handleShuffle = () => {
    const namesArray = names.split("\n").filter((name) => name.trim() !== "");
    const shuffled = [...namesArray].sort(() => Math.random() - 0.5);
    setShuffledNames(shuffled);
  };

  return (
    <main
      className={css({
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        padding: "6rem",
        minHeight: "100vh",
      })}
    >
      <h1
        className={css({
          fontSize: "4xl",
          fontWeight: "bold",
          marginBottom: "4rem",
        })}
      >
        Sorteio de Natal
      </h1>

      <div
        className={css({
          display: "grid",
          gridTemplateColumns: { base: "1fr", md: "1fr 1fr" },
          gap: "4rem",
          width: "100%",
          maxWidth: "800px",
        })}
      >
        <div>
          <h2
            className={css({
              fontSize: "2xl",
              fontWeight: "semibold",
              marginBottom: "1.5rem",
            })}
          >
            Participantes
          </h2>
          <textarea
            value={names}
            onChange={(e) => setNames(e.target.value)}
            placeholder="Digite os nomes, um por linha..."
            rows={10}
            className={css({
              width: "100%",
              padding: "1rem",
              border: "1px solid token(colors.gray.300)",
              borderRadius: "md",
              fontSize: "md",
            })}
          />
          <button
            onClick={handleShuffle}
            className={css({
              marginTop: "1.5rem",
              padding: "1rem 2rem",
              backgroundColor: "blue.500",
              color: "white",
              fontWeight: "bold",
              borderRadius: "md",
              cursor: "pointer",
              _hover: {
                backgroundColor: "blue.600",
              },
            })}
          >
            Sortear!
          </button>
        </div>

        <div>
          <h2
            className={css({
              fontSize: "2xl",
              fontWeight: "semibold",
              marginBottom: "1.5rem",
            })}
          >
            Ordem do Sorteio
          </h2>
          {shuffledNames.length > 0 ? (
            <ol
              className={css({
                listStyleType: "decimal",
                paddingLeft: "1.5rem",
              })}
            >
              {shuffledNames.map((name, index) => (
                <li
                  key={index}
                  className={css({
                    fontSize: "lg",
                    padding: "0.5rem 0",
                  })}
                >
                  {name}
                </li>
              ))}
            </ol>
          ) : (
            <p className={css({ color: "gray.500" })}>
              A ordem sorteada aparecerá aqui.
            </p>
          )}
        </div>
      </div>
    </main>
  );
}