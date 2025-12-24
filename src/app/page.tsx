"use client";

import { useState } from "react";
import { css } from "../../styled-system/css";
import { FaGift } from "react-icons/fa";

export default function Home() {
  const [names, setNames] = useState("");
  const [shuffledNames, setShuffledNames] = useState<string[]>([]);

  const handleShuffle = () => {
    const namesArray = names.split("\n").filter((name) => name.trim() !== "");
    const shuffled = [...namesArray].sort(() => Math.random() - 0.5);
    setShuffledNames(shuffled);
  };

  const positionTitles = [
    "O Rei do Jogo",
    "O Estrategista",
    "O Olho de Lince",
    "O Mão Leve",
    "O Sortudo",
  ];

  const shuffleCode = `const handleShuffle = () => {
  1. Pega os nomes do campo de texto, sem linhas vazias.
  
  const namesArray = names.split('\\n').filter((name) => name.trim() !== "");

  2. Embaralha a lista usando o método sort.
  A função Math.random() - 0.5 retorna um número
  aleatório (positivo ou negativo), fazendo com que
  a ordem seja totalmente imprevisível.
  
  const shuffled = [...namesArray].sort(() => Math.random() - 0.5);

  3. Atualiza a lista na tela com a nova ordem.
  setShuffledNames(shuffled);
};`;

  return (
    <main
      className={css({
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        padding: { base: "2rem", md: "4rem" },
        minHeight: "100vh",
        backgroundColor: "red.50", // Soft background color
      })}
    >
      <header
        className={css({
          display: "flex",
          alignItems: "center",
          gap: "1rem",
          marginBottom: "3rem",
        })}
      >
        <FaGift className={css({ fontSize: "40px", color: "red.600" })} />
        <h1
          className={css({
            fontSize: { base: "2xl", md: "4xl" },
            fontWeight: "bold",
            color: "green.800",
            textAlign: "center",
          })}
        >
          Amigo Ladrão 2025 - Família José
        </h1>
      </header>

      <div
        className={css({
          display: "grid",
          gridTemplateColumns: { base: "1fr", md: "1fr 1fr" },
          gap: { base: "3rem", md: "4rem" },
          width: "100%",
          maxWidth: "1024px",
        })}
      >
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
            Quem participa da bagunça?
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
              resize: "vertical",
            })}
          />
          <button
            onClick={handleShuffle}
            className={css({
              marginTop: "1.5rem",
              width: "100%",
              padding: "1rem 2rem",
              backgroundColor: "red.600",
              color: "white",
              fontWeight: "bold",
              borderRadius: "md",
              cursor: "pointer",
              transition: "background-color 0.2s",
              _hover: {
                backgroundColor: "red.700",
              },
            })}
          >
            Sortear a Ordem!
          </button>
        </div>

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
          {shuffledNames.length > 0 ? (
            <ol
              className={css({
                listStyle: "none",
                padding: "0",
                color: "gray.800",
              })}
            >
              {shuffledNames.map((name, index) => {
                let title = "";
                // This check must come first to ensure the last person is always "O Azarado"
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
          ) : (
            <p className={css({ color: "gray.500", fontStyle: "italic" })}>
              A ordem do sorteio aparecerá aqui...
            </p>
          )}
        </div>
      </div>

      {shuffledNames.length > 0 && (
        <div
          className={css({
            width: "100%",
            maxWidth: "1024px",
            marginTop: "2rem",
            padding: "2rem",
            backgroundColor: "gray.100",
            borderRadius: "lg",
            border: "1px solid",
            borderColor: "gray.300",
          })}
        >
          <h3
            className={css({
              fontSize: "xl",
              fontWeight: "bold",
              color: "gray.800",
              marginBottom: "1rem",
            })}
          >
            Código Para Auditoria
          </h3>
          <p className={css({ color: "gray.700", marginBottom: "1rem" })}>
            Este é o código exato que executa o sorteio. Ele garante um
            processo 100% aleatório e imparcial, sem favorecer nenhum
            participante.
          </p>
          <pre
            className={css({
              backgroundColor: "gray.800",
              color: "white",
              padding: "1rem",
              borderRadius: "md",
              overflowX: "auto",
              fontFamily: "monospace",
              fontSize: "sm",
            })}
          >
            <code>{shuffleCode}</code>
          </pre>
        </div>
      )}
    </main>
  );
}