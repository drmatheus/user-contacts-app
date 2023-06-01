import { styled } from "styled-components";

export const StyledHeader = styled.header`
  display: flex;
  position: relative;
  width: 100vw;
  max-width: 1280px;
  border-bottom: 4px solid var(--primary-blue);
  padding: 8px;
  padding-bottom: 24px;
  justify-content: space-between;
  align-items: baseline;
  flex-wrap: wrap;

  header h1 {
    font-size: 22px;
    color: var(--primary-white);
  }

  header h2 {
    font-size: 20px;
    color: var(--primary-white);
  }

  nav {
    display: flex;
    flex-direction: row;
    gap: 4px;
    align-items: flex-end;
    max-width: 90vw;
    flex-wrap: wrap;
    justify-content: flex-end;
    position: absolute;
    right: 0;
  }
`;
