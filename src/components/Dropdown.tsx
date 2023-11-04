// Dropdown.tsx
import React, { useState, ReactNode } from "react";
import { FaChevronDown, FaChevronRight } from "react-icons/fa";

interface DropdownProps {
  title: string;
  children: ReactNode;
}

const Dropdown: React.FC<DropdownProps> = ({ title, children }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div>
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center font-bold"
        style={{
          marginBottom: "0.5rem",
          cursor: "pointer",
          outline: "none",
          transition: "all 0.3s ease",
        }}
      >
        {isOpen ? <FaChevronDown /> : <FaChevronRight />}
        <span className="ml-2">{title}</span>
      </button>
      <div
        style={{
          maxHeight: isOpen ? "100%" : "0",
          overflow: "hidden",
          transition: "max-height 0.3s ease-in-out",
        }}
      >
        {isOpen ? (
          <pre
            style={{
              background: "#f5f5f5", // or any other code-like background
              padding: "10px",
              borderRadius: "4px",
              whiteSpace: "pre-wrap", // to break lines
              wordBreak: "break-all", // to break long lines
            }}
          >
            {children}
          </pre>
        ) : null}
      </div>
    </div>
  );
};

export default Dropdown;
