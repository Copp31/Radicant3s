import styled from "styled-components";

export const DetailedTextContainer = styled.div`
  max-width: 60%;
  padding-top: 30px;
  margin: 40px auto;
  font-family: CodeSaver;
  font-size: 14px;
  color: #B222FF;
  line-height: 1.4;
  text-align: left;
  padding-bottom: 5%;

  @media (max-width: 768px) {
    max-width: 90%;
    font-size: 14px;
    padding-bottom: 20%;
  }
`;

export const SectionContainer = styled.div`
  padding-top: 30px;
`;

export const SectionTitle = styled.h3`
  font-size: 14px;
  color: #B222FF;
  margin-bottom: 10px;
  font-weight: bold;
  cursor: pointer; /* Indicates it's clickable */
  user-select: none;
`;

export const CodeBlock = styled.pre`
  background: rgba(178, 34, 255, 0.2);
  padding: 10px;
  font-size: 13px;
  font-family: monospace;
  white-space: pre-wrap;
  word-break: break-word;
  margin-bottom: 10px;
`;

export const Description = styled.p`
  margin-bottom: 0;
`;
