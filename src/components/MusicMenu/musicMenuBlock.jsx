import PropTypes from "prop-types";
import { useState, useEffect } from "react";
import {
  MusicMenuContainer,
  BlockOne,
  BlockTwo,
  MenuItem,
} from "./musicMenuStyled";
import info from "../../assets/text/information.json";

const MusicMenuBlock = ({ selectedBlockOne, selectedBlockTwo, setSelectedBlockOne, setSelectedBlockTwo, setSelectedBlockOneIndex }) => {
  const [language, setLanguage] = useState("fr");

  useEffect(() => {
    const browserLang = navigator.language.startsWith("fr") ? "fr" : "fr";
    setLanguage(browserLang);
  }, []);

  useEffect(() => {
    const defaultBlockOne = info.musicMenu[language].blockOne[2] || null;
    if (defaultBlockOne) {
      setSelectedBlockOne(defaultBlockOne);
      setSelectedBlockTwo("FULL"); 
      setSelectedBlockOneIndex(0); 
    }
  }, [language, setSelectedBlockOne, setSelectedBlockOneIndex, setSelectedBlockTwo]);

  const selectItem = (item, index, block) => {
    if (block === "one") {
      setSelectedBlockOne(item);
      setSelectedBlockTwo("FULL"); 
      setSelectedBlockOneIndex(0); 
    } else {
      setSelectedBlockTwo(item);
      setSelectedBlockOneIndex(index + 1);
    }
  };

  return (
    <MusicMenuContainer role="menu" aria-label="Menu de musique">
      <BlockOne role="menu" aria-label="Bloc 1 - Sélection du type de version">
      {info.musicMenu[language].blockOne.map((item, index) => (
        <MenuItem
          key={index}
          $blockType="one" // ✅ Correction : bien "one"
          $isSelected={selectedBlockOne === item} // ✅ Correction : vérifie `selectedBlockOne`
          onClick={() => selectItem(item, index, "one")}
          role="menuitemradio"
          aria-checked={selectedBlockOne === item}
          tabIndex={0}
          onKeyDown={(e) => e.key === "Enter" && selectItem(item, index, "one")}
        >
          {item}
        </MenuItem>
      ))}
    </BlockOne>

    <BlockTwo role="menu" aria-label="Bloc 2 - Sélection des pistes">
      {info.musicMenu[language].blockTwo.map((item, index) => (
        <MenuItem
          key={index}
          $blockType="two" // ✅ Bien "two"
          $isSelected={selectedBlockTwo === item} // ✅ Vérifie `selectedBlockTwo`
          onClick={() => selectItem(item, index, "two")}
          role="menuitemradio"
          aria-checked={selectedBlockTwo === item}
          tabIndex={0}
          onKeyDown={(e) => e.key === "Enter" && selectItem(item, index, "two")}
        >
          {item}
        </MenuItem>
      ))}
    </BlockTwo>

    </MusicMenuContainer>
  );
};

MusicMenuBlock.propTypes = {
  selectedBlockOne: PropTypes.string.isRequired,
  selectedBlockTwo: PropTypes.string.isRequired,
  setSelectedBlockOne: PropTypes.func.isRequired,
  setSelectedBlockTwo: PropTypes.func.isRequired,
  setSelectedBlockOneIndex: PropTypes.func.isRequired,
};

export default MusicMenuBlock;
