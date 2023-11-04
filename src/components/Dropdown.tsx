// Dropdown.tsx
import React, { useState, ReactNode } from 'react';

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
        className="font-bold"
        style={{
          marginBottom: '0.5rem',
          cursor: 'pointer',
          outline: 'none',
          transition: 'all 0.3s ease',
        }}
      >
        {title}
      </button>
      <div
        style={{
          maxHeight: isOpen ? '100%' : '0',
          overflow: 'hidden',
          transition: 'max-height 0.3s ease-in-out',
        }}
      >
        {isOpen ? children : null}
      </div>
    </div>
  );
};

export default Dropdown;
