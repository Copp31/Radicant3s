import PropTypes from "prop-types"; // ✅ Import PropTypes
import { TextBlockContainer, TextParagraph } from "./textBlockStyled";
import info from "../../assets/text/information.json"; 

const TextBlock = ({ language }) => {
  return (
    <TextBlockContainer role="region" aria-labelledby="textblock-title">
      {/* ✅ Titre caché pour l'accessibilité */}
      <h2 id="textblock-title" className="visually-hidden" aria-hidden="true">
        {language === "fr" ? "Bloc de texte" : "Text Block"}
      </h2>

      {/* ✅ Affichage des paragraphes selon la langue */}
      {info.textBlock[language].map((paragraph, index) => (
        <TextParagraph key={index} lang={language} tabIndex="0">
          {paragraph}
        </TextParagraph>
      ))}
    </TextBlockContainer>
  );
};

// ✅ Définition des PropTypes pour valider `language`
TextBlock.propTypes = {
  language: PropTypes.string.isRequired,
};

export default TextBlock;
