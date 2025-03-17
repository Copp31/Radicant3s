import styled from "styled-components";

// 📂 Container principal pour l'image
export const VisualContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 80vh;
  width: 100%;
  position: relative;
  overflow: hidden;
  background: transparent;

  @media (max-width: 768px) and (orientation: landscape) {
    display: flex;
    align-items: center;
    justify-content: center;
    height: 100vh;
    width: 100vw;
  }
`;

// 📂 Image avec effet de fondu
export const VisualImage = styled.img`
  max-width: 80%;
  max-height: 80vh;
  object-fit: contain;
  cursor: pointer;
  position: absolute;
  transition: opacity 1s ease-in-out;

  @media (max-width: 768px) {
    max-width: 100%;
    max-height: none;
    height: auto;
  }

  /* ✅ Mobile Landscape : Correction du centrage */
  @media (max-width: 768px) and (orientation: landscape) {
    max-width: 100%;
    max-height: 80vh; 
    object-fit: contain;
    position: relative; 
    margin: auto; 
  }

  &.fade-out {
    opacity: 0;
  }

  &.fade-in {
    opacity: 1;
  }
`;
