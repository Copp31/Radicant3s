import PropTypes from "prop-types";
import { LanguageSwitcherContainer, LanguageButton } from "./langageSwitcherStyled";

const LangageSwitcherBlock = ({ language, setLanguage }) => {
  const toggleLanguage = () => {
    setLanguage(language === "fr" ? "en" : "fr");
  };

  return (
    <LanguageSwitcherContainer>
      <LanguageButton
        onClick={toggleLanguage}
        onKeyDown={(e) => {
          if (e.key === "Enter" || e.key === " ") toggleLanguage();
        }}
        role="button" 
        tabIndex="0"   
        aria-label={language === "fr" ? "Switch to English" : "Passer en français"}
        title={language === "fr" ? "Switch to English" : "Passer en français"}
      >
        {language === "fr" ? "EN" : "FR"}
      </LanguageButton>
    </LanguageSwitcherContainer>
  );
};

// ✅ PropTypes validation
LangageSwitcherBlock.propTypes = {
  language: PropTypes.string.isRequired,
  setLanguage: PropTypes.func.isRequired,
};

export default LangageSwitcherBlock;
