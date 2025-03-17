import { useState } from "react";
import PropTypes from "prop-types";
import { motion, AnimatePresence } from "framer-motion";
import { FiCircle } from "react-icons/fi"; // ✅ Cercle vide
import {
  HeaderContainer,
  LeftContent,
  RightContent,
  BurgerMenu,
  Overlay,
  OverlayContent,
  Title,
  Author,
  Subtitle
} from "./headerBlockStyled";
import info from "../../assets/text/information.json"; 

const HeaderBlock = ({ language }) => {
  const [isOpen, setIsOpen] = useState(false); 

  return (
    <motion.div>
      <HeaderContainer>
        <BurgerMenu onClick={() => setIsOpen(true)}>
          <FiCircle size={16} />
        </BurgerMenu>

        <LeftContent>
          <Title>{info.header[language].title}</Title>
          <Author>{info.header[language].author}</Author>
        </LeftContent>

        <RightContent>
          <Subtitle>{info.header[language].subtitle01}</Subtitle>
          <Subtitle>{info.header[language].subtitle02}</Subtitle>
        </RightContent>
      </HeaderContainer>

      {/* Overlay qui s'affiche en mode mobile */}
      <AnimatePresence>
        {isOpen && (
          <Overlay
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setIsOpen(false)}
          >
            <OverlayContent onClick={(e) => e.stopPropagation()}>
              <Title>{info.header[language].title}</Title>
              <Author>{info.header[language].author}</Author>
              <Subtitle>{info.header[language].subtitle01}</Subtitle>
              <Subtitle>{info.header[language].subtitle02}</Subtitle>
            </OverlayContent>
          </Overlay>
        )}
      </AnimatePresence>
    </motion.div>
  );
};

HeaderBlock.propTypes = {
  language: PropTypes.string.isRequired,
};

export default HeaderBlock;
