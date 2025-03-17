import styled from "styled-components";

export const MusicMenuContainer = styled.div`
  position: relative;
  left: 50%;
  // top: 60%;
  transform: translate(-50%, 0%);
  width: 100%;
  max-width: 800px;
  height: auto;
  background: rgba(255, 255, 255, 0.9);
  padding-top: 5%;
  border-radius: 8px;
  display: flex;
  flex-direction: column;
  text-align: left;
  z-index: 1003;

  @media (max-width: 768px) {
    width: 100%;
    padding-left: 0;
    padding-top: 20%;
    padding-bottom: 50px;
    text-align: center;
    backdrop-filter: blur(10px);
    position: relative;
    left: 0%;
    top: 0%;
    transform: translate(0, 0);

  }

  @media (min-width: 1370px) {
    max-width: 600px;
  }
`;

export const BlockOne = styled.div`
  display: flex;
  flex-direction: column;
  gap: 13px;padding-bottom: 20px;
`;

export const BlockTwo = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 10px 10px;
  text-align: center; 
  justify-items: center; 
  align-items: center;
  margin-top: 20px;
`;

export const MenuItem = styled.div.attrs(({ $isSelected }) => ({
  "aria-selected": $isSelected ? "true" : "false"
}))`
  font-size: 14px;
  color: #B222FF;
  font-family: CodeSaver;
  cursor: pointer;
  padding: 5px;
  border-radius: 5px;
  transition: color 0.3s ease-in-out, opacity 0.3s ease-in-out, background 0.3s ease-in-out;
  background: ${({ $isSelected }) => ($isSelected ? "rgba(178, 34, 255, 0.2)" : "transparent")}; // ✅ Fixé pour que ça fonctionne

  &:focus {
    outline: 3px solid #B222FF;
    outline-offset: 2px;
  }

  ${({ $blockType }) => $blockType === "one" && `
    &:hover {
      color: rgba(178, 34, 255, 0.6);
    }
  `}

  ${({ $blockType }) => $blockType === "two" && `
    &:hover {
      opacity: 0.6;
    }
  `}
`;
