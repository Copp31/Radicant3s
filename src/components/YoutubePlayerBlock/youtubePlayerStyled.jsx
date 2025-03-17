import styled from "styled-components";

export const PlayerContainer = styled.div`
  display: flex;
  flex-direction: column; 
  justify-content: center;
  align-items: center;
  width: 100%;
  max-width: 1200px;
  margin: 0 auto; 
  padding-bottom: 20px;

  iframe {
    border-radius: 10px;
    box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.1);
    width: 100%;
    height: 600px;
    aspect-ratio: 16 / 9;
  }

  @media (max-width: 1024px) {
    max-width: 85%;
    iframe {
      height: 500px;
    }
  }

  @media (max-width: 768px) {
    max-width: 950%;


    iframe {
      ${({ isLandscape }) =>
        isLandscape
          ? `
            width: 100vw;
            height: 100vh;
            border-radius: 0;
          `
          : `
            width: 100%;
            height: 300px;
          `}
    }
  }
`;
