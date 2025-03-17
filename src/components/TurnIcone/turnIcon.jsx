import { useState, useEffect } from "react";
import { TurnIconContainer, TurnIconText } from "./turniconestyled"; // Importation des styles
import { FaSyncAlt } from "react-icons/fa"; // Icône pour tourner

const TurnIcone = () => {
  const [isPortrait, setIsPortrait] = useState(false);

  useEffect(() => {
    const handleOrientationChange = () => {
      const isPortraitMode = window.innerWidth < window.innerHeight;
      setIsPortrait(isPortraitMode);
    };

    window.addEventListener("resize", handleOrientationChange);
    handleOrientationChange(); // Vérifier au chargement initial

    return () => window.removeEventListener("resize", handleOrientationChange);
  }, []);

  // Afficher uniquement en mode portrait mobile
  if (!isPortrait || window.innerWidth >= 768) {
    return null; // Ne rien afficher si l'écran est en paysage ou non mobile
  }

  return (
    <TurnIconContainer>
      <FaSyncAlt />
      <TurnIconText>Tournez votre appareil</TurnIconText>
    </TurnIconContainer>
  );
};

export default TurnIcone;
