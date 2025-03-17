import styled from "styled-components";
import { motion } from "framer-motion";

export const HeaderContainer = styled.header`
  position: sticky;
  top: 0;
  z-index: 1008;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 20px 10px;
  background-color: transparent;
  width: 100%;
`;

export const LeftContent = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding-left: 10px;
  flex: 1;

  @media (max-width: 768px) {
    display: none;
  }
`;

export const RightContent = styled.div`
  text-align: right;
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  justify-content: center;
  padding-right: 20px;
  flex: 1;

  @media (max-width: 768px) {
    display: none;
  }
`;

export const BurgerMenu = styled.button`
  background: none;
  border: none;
  position:fixed;
  color: #B222FF;
  cursor: pointer;
  display: block;
  margin-left: auto;
  padding-right: 20px;
  padding-top: 20px;

  @media (min-width: 769px) {
    display: none;
  }

  &:hover {
    color: #8a00cc;
  }
`;

export const Overlay = styled(motion.div)`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.8);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 2000;
`;


export const OverlayContent = styled.div`
  background: white;
  padding: 30px;
  width: 80%;
  max-width: 350px;
  text-align: center;
  border-radius: 10px;

  &:hover {
    cursor: default;
  }
`;

export const Title = styled.h1`
  font-size: 14px;
  color: #B222FF;
  font-family: CodeSaver;
   font-weight: normal;
  margin-bottom: 5px;

  &.overlay-text {
    font-size: 15px;
  }
`;

export const Author = styled.h2`
  font-size: 14px;
  color: #B222FF;
  font-family: CodeSaver;
  font-weight: normal;
  margin-top: 0px;
  margin-bottom: 10px;

  &.overlay-text {
    font-size: 15px;
    padding-bottom: 30px; 
  }
`;

export const Subtitle = styled.h3`
  font-size: 14px;
  color: #B222FF;
  font-family: CodeSaver;
  margin: 0;
  line-height: 1.5;
   font-weight: normal;

  &.overlay-text {
    font-size: 15px; 
`;
