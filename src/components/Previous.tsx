import React from "react";

interface PreviousProps {
  children: React.ReactNode; // Déclarez children comme React.ReactNode
}

function Previous({ children }: PreviousProps) {
  return (
    <div>
      {children} {/* Rendu des enfants ici */}
    </div>
  );
}

export default Previous;
