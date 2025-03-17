import styled from "styled-components";

export const FooterContainer = styled.footer`
  width: 98%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 15px 20px;
  color: #B222FF;
  font-size: 12px;
  // position: absolute;
  bottom: 0;
  left: 0;
  height: 150px;

  @media (max-width: 1000px) {
    padding: 20px 10px;
  }

  @media (max-width: 768px) {
    max-width: 90%;
    font-size: 11px;
    position: relative;
  }
`;

export const FooterText = styled.div`
  font-family: CodeSaver;
  font-size: 12px;
  opacity: 0.7;
  text-align: right; 

  @media (max-width: 768px) {
    max-width: 90%;
    font-size: 11px;
    text-align: center; 
  }
`;

export const IconContainer = styled.div`
  display: flex;
  gap: 15px;
`;

export const IconLink = styled.a`
  color: #B222FF;
  font-size: 30px;
  transition: color 0.3s ease-in-out;

  &:hover {
    color: rgba(178, 34, 255, 0.5);
  }
`;
