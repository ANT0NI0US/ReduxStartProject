import { BiErrorCircle } from "react-icons/bi";
import { RiErrorWarningFill } from "react-icons/ri";

const severityComponents = {
  warning: <RiErrorWarningFill />,
  info: <BiErrorCircle />,
};

const variantStyles = {
  filled: {
    warning: "bg-error text-white",
    info: "bg-info text-primary",
  },
  outline: {
    warning: "bg-transparent border border-error text-error",
    info: "bg-transparent border border-info text-primary",
  },
};

const severityIconStyles = {
  filled: {
    warning: "text-white",
    info: "text-primary",
  },
  outline: {
    warning: "text-error",
    info: "text-primary",
  },
};

export default function HighlightMessage({
  children,
  severity = "info",
  showSeverity = true,
  Variant = "filled",
  Styles = "",
}) {
  const containerStyles = variantStyles[Variant]?.[severity] || "";
  const iconStyles = severityIconStyles[Variant]?.[severity] || "";

  return (
    <div
      className={`flexCenter flex-col gap-3 rounded-md p-[20px] text-center shadow-md sm:flex-row sm:text-start ${Styles} ${containerStyles}`}
    >
      {showSeverity && (
        <div className={`text-7xl sm:self-start sm:text-5xl ${iconStyles}`}>
          {severityComponents[severity]}
        </div>
      )}

      {children}
    </div>
  );
}
