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
        className="flexBetween w-full bg-primary p-4 text-left font-medium text-white hover:bg-opacity-[0.9] focus:outline-none active:bg-opacity-[0.9]"
      >
        <span>{title}</span>

        <FaChevronDown
          className={`h-5 w-5 transform transition-transform ${
            isOpen ? "rotate-180" : ""
          }`}
        />
      </button>
      {isOpen && (
        <div className="border bg-info p-4 text-textColor">{children}</div>
      )}
    </div>
  );
}
