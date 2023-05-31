import styled from "styled-components";

export const DropdownContainer = styled.div`
  position: relative;
  display: inline-block;
`;

export const DropdownButton = styled.button`
  background-color: var(--primary-blue);
  color: white;
  padding: 10px;
  font-size: 16px;
  border: none;
  cursor: pointer;
`;
type DropdownContentProps = {
  isOpen: boolean;
};

export const DropdownContent = styled.div<DropdownContentProps>`
  display: ${(props) => (props.isOpen ? "block" : "none")};
  position: absolute;
  background-color: #f9f9f9;
  max-width: 220px;
  box-shadow: 0px 8px 16px 0px rgba(0, 0, 0, 0.2);
  padding: 4px 8px;
  z-index: 1;
  right: 0;

  & > button {
    background-color: transparent;
    border: none;
    padding: 0;
    max-width: 100%;
  }
`;

export const DropdownItem = styled.button`
  background-color: transparent;
  border: none;
  cursor: pointer;
  padding: 8px 0;
  font-size: 16px;

  &:hover {
    color: #4caf50;
  }
`;
