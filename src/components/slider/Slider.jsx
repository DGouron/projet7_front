import React, { useState } from "react";

function Slider({ pictures }) {
  // Définissez un état pour enregistrer l'index de l'image actuellement affichée
  const [currentIndex, setCurrentIndex] = useState(0);

  // Définissez des fonctions pour passer à l'image suivante ou précédente
  const previous = () => {
    const newIndex = currentIndex - 1;
    setCurrentIndex(newIndex < 0 ? pictures.length - 1 : newIndex);
  };

  const next = () => {
    const newIndex = currentIndex + 1;
    setCurrentIndex(newIndex >= pictures.length ? 0 : newIndex);
  };

  return (
    <div>
      {/* Affichez l'image actuelle */}
      <img src={pictures[currentIndex]} alt={pictures} />

      {/* Affichez des boutons pour passer à l'image suivante ou précédente */}
      <button onClick={previous}>Précédent</button>
      <button onClick={next}>Suivant</button>
    </div>
  );
}

export default Slider;
