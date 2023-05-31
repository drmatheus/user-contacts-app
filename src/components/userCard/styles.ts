import { styled } from "styled-components";

export const StyledLi = styled.li`
  max-width: 90vw;
  display: flex;
  flex-direction: column;
  border-radius: 16px;
  padding: 4px;
  border: 4px var(--primary-white) solid;
  gap: 4px;
  background-color: whitesmoke;
  align-self: start;
  justify-content: center;

  form {
    display: flex;
    align-items: center;
  }

  .user {
    background-color: var(--primary-blue);
    border-top-right-radius: 8px;
    border-top-left-radius: 8px;
    border-bottom: 4px solid white;
    padding: 4px;
    position: relative;
    color: var(--primary-white);
    display: flex;
    justify-content: space-between;
    height: 48px;
    align-items: center;
  }

  .user button:last-child {
    margin-right: -4px;
  }

  button {
    min-width: 32px;
    height: 32px;
    padding: 0;
    background-color: transparent;
    border: none;
  }

  .customerName {
    font-size: 22px;
    background-color: var(--primary-white);
    border-radius: var(--radius-main);
    border: 2px solid var(--primary-white);
    color: var(--primary-blue);
  }

  .icon {
    font-size: 22px;
    margin-top: 2px;
  }

  p {
    font-size: 22px;
  }
`;

export const StyledLiContact = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;

  div {
    display: flex;
    flex-direction: row;
    gap: 8px;
    align-items: center;
  }

  div + div {
    gap: 0;
    width: 96px;
  }

  span {
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
    max-width: 40vw;
  }
`;
