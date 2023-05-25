import { styled } from "styled-components";

export const StyledButton = styled.button`
  width: 350px;
  max-width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: var(--primary-blue);
  height: 32px;
  border-radius: var(--radius-main);
  border: none;
  margin-top: 8px;

  &:disabled {
    opacity: 0.5;
  }

  span {
    color: var(--primary-white);
    font-size: 18px;
    letter-spacing: 1.5px;
  }
`;
