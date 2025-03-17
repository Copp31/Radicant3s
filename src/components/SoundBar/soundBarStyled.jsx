import styled from "styled-components";

export const SoundBarContainer = styled.div`
  position: sticky;
  top: 130px;
  z-index: 1005;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  color: white;
  width: 100%;

  @media (min-width: 768px) {
    width: 60%;
    margin: 0 auto;
    top: 50px;
  }

  @media (max-width: 768px) {
    padding-top: 10px;
    top: 90px;
    padding-bottom: 30px;
  }
`;

export const TimeDisplay = styled.div`
  font-size: 16px;
  color: #B222FF;
  font-family: CodeSaver;
  text-align: center;
  margin-top: 5px;
  letter-spacing: 1px;
`;

/* Contrôles (Bouton Play/Pause) */
export const Controls = styled.div`
  display: flex;
  gap: 10px;
  z-index: 1006;
  position: relative;
  padding-top: 10px;

  @media (max-width: 768px) {
    gap: 5px;
  }
`;

export const Button = styled.button`
  background: none;
  border: none;
  color: #B222FF;
  font-size: 24px;
  cursor: pointer;
  transition: 0.3s ease-in-out;
  z-index: 1007;

  &:hover {
    color: rgba(178, 34, 255, 0.6);
  }
`;

export const Loader = styled.div`
  width: 20px;
  height: 20px;
  border: 3px solid #B222FF;
  border-top: 3px solid transparent;
  border-radius: 50%;
  animation: spin 0.8s linear infinite;

  @keyframes spin {
    from {
      transform: rotate(0deg);
    }
    to {
      transform: rotate(360deg);
    }
  }
`;
