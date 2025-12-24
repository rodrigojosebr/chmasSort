"use client";

import {
  formButton,
  formContainer,
  formTextarea,
  formTitle,
} from "./ParticipantForm.styles";

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
    <div className={formContainer}>
      <h2 className={formTitle}>Quem participa da bagunça?</h2>
      <textarea
        value={names}
        onChange={(e) => onNamesChange(e.target.value)}
        placeholder="Digite os nomes, um por linha..."
        rows={10}
        className={formTextarea}
      />
      <button onClick={onShuffle} className={formButton}>
        Sortear a Ordem!
      </button>
    </div>
  );
};
