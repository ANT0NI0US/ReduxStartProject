import { useState } from "react";
import { FaChevronDown } from "react-icons/fa";

export default function Accordion({
  title,
  children,
  defaultOpen = false,
  Styles = "",
}) {
  const [isOpen, setIsOpen] = useState(defaultOpen);

  return (
    <div className={`${Styles}`}>
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flexBetween bg-primary hover:bg-primary/95 active:bg-primary/90 w-full p-4 text-left font-medium text-white focus:outline-hidden"
      >
        <span>{title}</span>

        <FaChevronDown
          className={`h-5 w-5 transform transition-transform ${
            isOpen ? "rotate-180" : ""
          }`}
        />
      </button>
      {isOpen && (
        <div className="bg-info text-text-color border p-4">{children}</div>
      )}
    </div>
  );
}
