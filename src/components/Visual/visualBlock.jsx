import { useState, useEffect } from "react";
import PropTypes from "prop-types"; 
import { VisualContainer, VisualImage } from "./visualStyled";

const imageFilesArray = Object.entries(import.meta.glob("../../assets/imagesOriginales/*.{jpg,png,gif}", { eager: true }))
  .map(([path, file]) => ({
    filename: path.split("/").pop(),
    path: file.default
  }))
  .sort((a, b) => a.filename.localeCompare(b.filename, undefined, { numeric: true }));

  const images = imageFilesArray.reduce((acc, { filename, path }) => {
    acc[filename] = path;
    return acc;
  }, {});

console.log("📂 Liste des fichiers images :", imageFilesArray);


const getImageName = (blockOneIndex, blockTwoIndex = 1) => {
  const formattedBlockOne = (blockOneIndex + 1).toString().padStart(2, "0"); 
  const formattedBlockTwo = blockTwoIndex.toString().padStart(2, "0");

  const imageName = `RADICANTE-${formattedBlockOne}${formattedBlockTwo}.png`;
  console.log(imageName)

  if (parseInt(formattedBlockOne) > 16 || parseInt(formattedBlockTwo) > 3) {
    return null; 
  }

  return imageName;
};

const VisualBlock = ({ selectedTitle, selectedBlockOneIndex, selectedBlockTwoIndex }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [prevIndex, setPrevIndex] = useState(null);
  const [touchStartX, setTouchStartX] = useState(0);
  const [isFullscreen, setIsFullscreen] = useState(false);

  useEffect(() => {
    const handleOrientationChange = () => {
      const isMobile = window.innerWidth < 768;
      const isLandscape = window.matchMedia("(orientation: landscape)").matches;
      setIsFullscreen(isMobile && isLandscape);
    };

    window.addEventListener("resize", handleOrientationChange);
    handleOrientationChange();

    return () => window.removeEventListener("resize", handleOrientationChange);
  }, []);

  // ✅ Met à jour l’image selon `selectedBlockOneIndex`
  useEffect(() => {
    if (selectedBlockOneIndex !== null) {
      const imageName = getImageName(selectedBlockOneIndex - 1);
      if (images[imageName]) {
        setPrevIndex(currentIndex);
        setCurrentIndex(selectedBlockOneIndex - 1);
      } else {
        console.warn(`Image non trouvée: ${imageName}`);
      }
    }
  }, [selectedBlockOneIndex]);

  // ✅ Change l’image au swipe ou au clic
  const changeImage = (direction) => {
    setPrevIndex(currentIndex);
    setCurrentIndex((prev) => {
      let newIndex = prev + direction;

      // ✅ Vérifier la limite max (16-04)
      if (newIndex < 0) newIndex = 0;
      if (newIndex >= 16 * 4) newIndex = (16 * 4) - 1; 

      return newIndex;
    });
  };

  const handleTouchStart = (e) => {
    setTouchStartX(e.touches[0].clientX);
  };

  const handleTouchEnd = (e) => {
    const touchEndX = e.changedTouches[0].clientX;
    if (touchStartX - touchEndX > 50) {
      changeImage(1); // Swipe gauche = image suivante
    } else if (touchEndX - touchStartX > 50) {
      changeImage(-1); // Swipe droite = image précédente
    }
  };

  const handleClick = (e) => {
    const { clientX } = e;
    const middle = window.innerWidth / 2;
    if (clientX < middle) {
      changeImage(-1); // Clic gauche = image précédente
    } else {
      changeImage(1); // Clic droit = image suivante
    }
  };

  useEffect(() => {
    console.log("🔹 selectedTitle:", selectedTitle);
    console.log("🔹 selectedBlockOneIndex:", selectedBlockOneIndex);
    console.log("🔹 selectedBlockTwoIndex:", selectedBlockTwoIndex);
    console.log("🖼️ Current Image Index:", currentIndex);
  }, [selectedTitle, selectedBlockOneIndex, selectedBlockTwoIndex, currentIndex]);

  return (
    <VisualContainer
      className={isFullscreen ? "fullscreen" : ""}
      onClick={handleClick}
      onTouchStart={handleTouchStart}
      onTouchEnd={handleTouchEnd}
    >
      {prevIndex !== null && <VisualImage src={images[getImageName(Math.floor(prevIndex / 4), (prevIndex % 3) + 1)]} className="fade-out" />}
      {currentIndex !== null && <VisualImage src={images[getImageName(Math.floor(currentIndex / 4), (currentIndex % 3) + 1)]} className="fade-in" />}
    </VisualContainer>
  );
};

VisualBlock.propTypes = {
  selectedTitle: PropTypes.string.isRequired, 
  selectedBlockOneIndex: PropTypes.number, 
  selectedBlockTwoIndex: PropTypes.number, 
};

export default VisualBlock;
