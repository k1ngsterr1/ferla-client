"use client";
import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronDown, faChevronUp } from "@fortawesome/free-solid-svg-icons";
import styles from "./styles.module.scss";

interface SelectorProps {
  placeholder: string;
  value: string;
  margin: string;
  onChange: (value: string) => void;
  options: { label: string; value: string }[];
}

const Selector: React.FC<SelectorProps> = ({
  placeholder,
  value,
  onChange,
  options,
}) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleDropdown = () => setIsOpen(!isOpen);
  const handleOptionClick = (selectedValue: string) => {
    onChange(selectedValue);
    setIsOpen(false);
  };

  return (
    <div
      className={`w-full flex flex-col items-center margin relative hoveralbe`}
    >
      <div
        className={`${styles.selector} flex gap-2 hoverable`}
        onClick={toggleDropdown}
      >
        <span className={`${styles.selectorPlaceholder} hoverable`}>
          {value || placeholder}
        </span>
        <FontAwesomeIcon
          className={`${styles.selectorChevron} hoverable`}
          icon={isOpen ? faChevronUp : faChevronDown}
        />
      </div>
      {isOpen && (
        <ul className={`${styles.list} hoverable`}>
          {options.map((option) => (
            <li
              key={option.value}
              onClick={() => handleOptionClick(option.value)}
              className={`${styles.listItem} hoverable`}
            >
              {option.label}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default Selector;
