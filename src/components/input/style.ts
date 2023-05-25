import styled from "styled-components";

export const StyledInput = styled.div`
  width: 350px;
  max-width: 100%;
  position: relative;
  display: flex;
  flex-direction: column;
  gap: 8px;

  label {
    font-size: 16px;
    color: var(--secundary-gray);
    letter-spacing: 1.5px;
    margin-bottom: -4px;
  }

  input {
    width: 100%;
    height: 32px;
    background-color: var(--primary-white);
    outline: none;
    border-color: var(--primary-blue);
    border-radius: var(--radius-main);
    padding-left: 6px;
  }

  span {
    text-align: right;
    margin-top: -8px;
    margin-bottom: -16px;
    color: var(--primary-white);
    font-size: 14px;
  }
`;
