import styled from "styled-components";

export const TextBlockContainer = styled.section`
  max-width: 60%;
  margin: 40px auto;
  font-family: CodeSaver;
  font-size: 14px;
  color: #B222FF;
  line-height: 1.6;
  text-align: left; /* 🔥 Justification supprimée pour lisibilité */
  padding-top: 70px;
  aria-labelledby: "textblock-title";

  @media (max-width: 768px) {
    max-width: 90%;
    font-size: 14px;
    padding-top: 5px;
    margin: 10px auto;
  }
`;

export const TextParagraph = styled.p`
  margin-bottom: 15px;
  outline: none; /* 🔥 Permet d'éviter les bordures de focus non désirées */

  &:focus {
    outline: 3px solid #B222FF; /* ✅ Ajoute une indication visuelle de focus */
  }
`;

