import { styled } from "styled-components";

export const StyledForm = styled.form`
  width: 400px;
  max-width: 90vw;
  position: relative;
  display: flex;
  flex-direction: column;
  gap: 16px;
  background-color: var(--primary-gray);
  align-items: center;
  padding: 16px;
  border-radius: var(--radius-main);
  padding: 32px 16px;
  margin-top: 16px;

  -webkit-box-shadow: inset 0px 0px 20px -10px rgba(0, 0, 0, 0.5);
  -moz-box-shadow: inset 0px 0px 20px -10px rgba(0, 0, 0, 0.5);
  box-shadow: inset 0px 0px 20px -10px rgba(0, 0, 0, 0.5);
  z-index: 1;
`;
