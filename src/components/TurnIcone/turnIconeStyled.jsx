import styled from "styled-components";

export const TurnIconContainer = styled.div`
  position: fixed;
  bottom: 45%;
  left: 50%;
  transform: translateX(-50%);
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: rgba(178, 34, 255, 0.5);
  color: #ffffff;
  padding: 10px 20px;
  z-index: 1000;
  animation: fadeIn 0.8s ease-in-out;
  font-family: CodeSaver;

  @keyframes fadeIn {
    from {
      opacity: 0;
      transform: translateX(-50%) translateY(10px);
    }
    to {
      opacity: 1;
      transform: translateX(-50%) translateY(0);
    }
  }

  svg {
    margin-right: 8px;
    font-size: 18px;
  }
`;

export const TurnIconText = styled.span`
  font-size: 14px;
  font-weight: 500;
  text-align: center;
`;
