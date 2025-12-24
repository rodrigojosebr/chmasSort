// src/components/ParticipantForm.tsx
"use client";

import { css } from "../../styled-system/css";

interface ParticipantFormProps {
  names: string;
  onNamesChange: (value: string) => void;
  onShuffle: () => void;
}

export const ParticipantForm = ({
  names,
  onNamesChange,
  onShuffle,
}: ParticipantFormProps) => {
  return (
    <div
      className={css({
        backgroundColor: "white",
        padding: "2rem",
        borderRadius: "lg",
        boxShadow: "md",
        height: "fit-content",
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
        onChange={(e) => onNamesChange(e.target.value)}
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
        onClick={onShuffle}
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
  );
};
