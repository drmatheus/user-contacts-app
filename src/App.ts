import styled, { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`
:root {

  font-family: Inter, system-ui, Avenir, Helvetica, Arial, sans-serif;
  line-height: 1.5;
  font-weight: 400;

  --primary-blue: rgba(51, 102, 204, 0.8);
  --secondary-blue: rgba(0, 183, 255, 0.4);
  --primary-gray: rgba(128, 128, 128, 0.2);
  --secondary-gray: rgba(192, 192, 192, 0.2);
  --primary-white: rgba(255, 255, 255, 0.9);
  --orange: rgba(255, 165, 0, 0.8);

  --radius-main: 4px;
}

* {
  list-style: none;
  box-sizing: border-box;
  padding: 0;
  margin: 0;
  text-decoration: none;
}

`;

export const MainDiv = styled.div`
  background-color: #b4cee6;

  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: center;
  gap: 64px;
  /* overflow-y: scroll; */
  min-height: 100vh;
  height: 100%;
  width: 100%;

  img {
    width: 350px;
    max-width: 100vw;
    height: auto;
    opacity: 0.4;
    margin-top: -96px;
  }

  h4 {
    font-size: 18px;
    font-weight: 400;
  }

  .linkButton {
    width: 350px;
    max-width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: var(--primary-blue);
    height: 32px;
    border-radius: var(--radius-main);
    border: none;
    color: var(--primary-white);
    font-size: 18px;
    letter-spacing: 1.5px;
  }

  @media (min-width: 768px) {
    .container {
      flex-direction: row;
    }

    .logo {
      margin: 0;
    }
  }
`;

export const Container = styled.div`
  max-width: 1280px;
  width: 100vw;
  display: flex;
  flex-direction: column;

  align-items: center;
  justify-content: center;

  .vitrine {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(310px, 1.1fr));
    grid-gap: 20px;
    width: 95vw;
    max-width: 1280px;
  }
`;
