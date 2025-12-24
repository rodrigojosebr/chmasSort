"use client";

import {
  auditSectionContainer,
  auditSectionPre,
  auditSectionText,
  auditSectionTitle,
} from "./AuditSection.styles";

interface AuditSectionProps {
  shuffleCode: string;
}

export const AuditSection = ({ shuffleCode }: AuditSectionProps) => {
  return (
    <div className={auditSectionContainer}>
      <h3 className={auditSectionTitle}>Código Para Auditoria</h3>
      <p className={auditSectionText}>
        Este é o código exato que executa o sorteio. Ele garante um processo
        100% aleatório e imparcial, sem favorecer nenhum participante.
      </p>
      <pre className={auditSectionPre}>
        <code>{shuffleCode}</code>
      </pre>
    </div>
  );
};
