import styled from "styled-components";
import Modal from "react-modal";

export const StyledModal = styled(Modal)`
  background-color: #fff;
  border-radius: 4px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.2);
  padding: 8px;
  width: 400px;
  max-width: 94%;
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
`;

export const FormContainer = styled.div`
  padding: 20px;
  background-color: var(--primary-white);
  border-radius: var(--radius-main);
  gap: 32px;

  button + button {
    margin-left: auto;
  }

  form {
    display: flex;
    flex-direction: column;
    gap: 12px;
  }
`;

export const HeaderModalStyled = styled.h2`
  width: 100%;
  background-color: var(--primary-blue);
  color: var(--primary-white);
  font-size: 24px;
  height: 38px;
  margin-bottom: 16px;
  text-align: center;
  border-top-left-radius: var(--radius-main);
  border-top-right-radius: var(--radius-main);
`;
