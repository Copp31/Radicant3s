import styled from "styled-components";

export const SoundBarContainer = styled.div`
  position: sticky;
  top: 130px;
  z-index: 999;
  display: flex;
  flex-direction: column; 
  align-items: center;
  justify-content: center; 
  padding: 10px 20px;
  color: white;
  width: 100%;

  @media (min-width: 768px) {
    width: 60%;
    margin: 0 auto;
    top: 50px;
    margin-top: 0px;
      padding-top: 100px;

  }

  @media (max-width: 768px) {
    padding: 0 0;
    padding-top: 10px;
    top: 130px;
      padding-top: 100px;
  }
`;

export const SoundBarTitle = styled.div`
  font-size: 14px;
  color: #B222FF;
  font-family: CodeSaver;
  text-align: center;
  opacity: 0.8;
  margin-bottom: 5px;
`;

/* Time Display */
export const TimeDisplay = styled.div`
  font-size: 12px;
  color: #B222FF;
  font-family: CodeSaver;
  text-align: center;
  margin-bottom: 5px;
  margin-top:5px;

  @media (max-width: 768px) {
    font-size: 11px;
  }
`;

/* Controls Moved Below Time */
export const Controls = styled.div`
  display: flex;
  gap: 10px;
  z-index: 1001;
  margin-top: 10px;

  @media (max-width: 768px) {
    margin-left: 10px;
    gap: 1px;
  }
`;

export const Button = styled.button`
  background: none;
  border: none;
  color: #B222FF;
  font-size: 18px;
  cursor: pointer;
  transition: 0.3s ease-in-out;
  position: relative;
  z-index: 1002;

  &:hover {
    color: rgba(178, 34, 255, 0.3);
  }
`;

export const ProgressBar = styled.input`
  width: 100%;
  appearance: none;
  height: 1px;
  background: #B222FF;
  border-radius: 5px;
  cursor: pointer;
  margin: 0 10px;

  /* Custom slider thumb */
  &::-webkit-slider-thumb {
    appearance: none;
    width: 14px;
    height: 14px;
    background: #B222FF;
    border-radius: 50%;
    cursor: pointer;
    border: 2px solid white;
  }

  &::-moz-range-thumb {
    width: 14px;
    height: 14px;
    background: #B222FF;
    border-radius: 50%;
    cursor: pointer;
    border: 2px solid white;
  }
`;
