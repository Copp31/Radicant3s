import styled from "styled-components";

export const LanguageSwitcherContainer = styled.div`
  position: fixed;  
  top: 90px;  
  right: 20px; 
  z-index: 1008;
  display: flex;
  justify-content: flex-end; 

  @media (max-width: 769px) {
    top: 20px; 
    right: 10px; 
  }

`;

export const LanguageButton = styled.button`
  background: none;
  border: none;
  cursor: pointer;
  font-size: 14px;
  font-family: CodeSaver;
  color: #B222FF;
  font-weight: bold;
  letter-spacing: 1px;
  text-transform: uppercase;
  transition: color 0.3s ease-in-out;

  &:hover {
    color: rgba(178, 34, 255, 0.7);
  }
`;
