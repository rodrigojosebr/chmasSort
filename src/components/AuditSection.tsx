// src/components/AuditSection.tsx
"use client";

import { css } from "../../styled-system/css";

interface AuditSectionProps {
  shuffleCode: string;
}

export const AuditSection = ({ shuffleCode }: AuditSectionProps) => {
  return (
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
        Este é o código exato que executa o sorteio. Ele garante um processo
        100% aleatório e imparcial, sem favorecer nenhum participante.
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
  );
};
