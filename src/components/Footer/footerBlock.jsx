import PropTypes from "prop-types"; 
import { FooterContainer, FooterText } from "./footerBlockStyled";

const FooterBlock = ({ language }) => {
  const currentYear = new Date().getFullYear();

  return (
    <FooterContainer>
      <FooterText>© {currentYear} {language === "fr" ? "Tous droits réservés." : "All rights reserved."}</FooterText>
    </FooterContainer>
  );
};

FooterBlock.propTypes = {
  language: PropTypes.string.isRequired,
};

export default FooterBlock;
