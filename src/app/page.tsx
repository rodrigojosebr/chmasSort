// src/app/page.tsx
"use client";

import { useState } from "react";
import { FaGift } from "react-icons/fa";
import { ParticipantForm } from "../components/ParticipantForm";
import { ResultsDisplay } from "../components/ResultsDisplay";
import { AuditSection } from "../components/AuditSection";
import {
  contentGrid,
  giftIcon,
  header,
  mainContainer,
  mainTitle,
} from "./page.styles";

export default function Home() {
  const [names, setNames] = useState("");
  const [shuffledNames, setShuffledNames] = useState<string[]>([]);

  const handleShuffle = () => {
    const namesArray = names.split("\n").filter((name) => name.trim() !== "");
    if (namesArray.length < 2) {
      alert("É preciso ter pelo menos 2 participantes para o sorteio.");
      return;
    }
    const shuffled = [...namesArray].sort(() => Math.random() - 0.5);
    setShuffledNames(shuffled);
  };

  const shuffleCode = `const handleShuffle = () => {
  // 1. Pega os nomes do campo de texto, sem linhas vazias.
  const namesArray = names.split('\n').filter((name) => name.trim() !== "");

  // Valida se existem pelo menos 2 participantes.
  if (namesArray.length < 2) {
    alert("É preciso ter pelo menos 2 participantes para o sorteio.");
    return;
  }

  // 2. Embaralha a lista usando o método sort.
  // A função Math.random() - 0.5 retorna um número
  // aleatório (positivo ou negativo), fazendo com que
  // a ordem seja totalmente imprevisível.
  const shuffled = [...namesArray].sort(() => Math.random() - 0.5);

  // 3. Atualiza a lista na tela com a nova ordem.
  setShuffledNames(shuffled);
}`;

  return (
    <main className={mainContainer}>
      <header className={header}>
        <FaGift className={giftIcon} />
        <h1 className={mainTitle}>Amigo Ladrão 2025 - Família José</h1>
      </header>

      <div className={contentGrid}>
        <ParticipantForm
          names={names}
          onNamesChange={setNames}
          onShuffle={handleShuffle}
        />
        <ResultsDisplay shuffledNames={shuffledNames} />
      </div>

      {shuffledNames.length > 0 && <AuditSection shuffleCode={shuffleCode} />}
    </main>
  );
}
