import { useState, useEffect } from "react";
import { DropdownContainer, DropdownButton, DropdownContent } from "./style";
import { BsList } from "react-icons/bs";
import React from "react";

type DropdownProps = {
  children: React.ReactNode;
};

export const Dropdown = ({ children }: DropdownProps) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  const handleButtonClick = () => {
    setIsOpen(false);
  };

  return (
    <DropdownContainer>
      <DropdownButton onClick={toggleDropdown}>
        <BsList />
      </DropdownButton>
      <DropdownContent isOpen={isOpen}>
        {React.Children.map(children, (child) => {
          if (React.isValidElement(child)) {
            return (
              <button
                onClick={(e) => {
                  handleButtonClick();
                  child.props.onClick?.(e);
                }}
              >
                {child}
              </button>
            );
          }
          return child;
        })}
      </DropdownContent>
    </DropdownContainer>
  );
};
