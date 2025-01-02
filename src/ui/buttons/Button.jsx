import { Link } from "react-router-dom";

const Loading = () => (
  <div className="flexCenter gap-1">
    <div className="h-3 w-3 animate-bounce rounded-full bg-darkPrimary [animation-delay:-0.3s]"></div>
    <div className="h-3 w-3 animate-bounce rounded-full bg-darkPrimary [animation-delay:-0.15s]"></div>
    <div className="h-3 w-3 animate-bounce rounded-full bg-darkPrimary"></div>
  </div>
);

export default function Button({
  children,
  type = "button",
  onClick,
  variation = "primary",
  styles = "",
  disabled,
  loading,
  AriaLabel,
  name,
  To,
  Replace = false,
}) {
  const base = `focus:outline-none flexCenter gap-1 w-full rounded-md border text-sm sm:text-base font-bold h-[45px] transition-all focus:offset-2 focus:ring focus:ring-primary duration-300
    ${
      (disabled || loading) &&
      "!cursor-not-allowed !border-disabled !bg-disabled"
    }`;

  const variationStyles = {
    primary: `bg-primary text-white ${
      !disabled && !loading && "hover:bg-opacity-[0.9] active:bg-opacity-[0.9]"
    }`,
    secondary: `bg-lightPrimary border-white text-textColor 
      ${
        !disabled &&
        !loading &&
        "hover:border-primary hover:bg-primary hover:text-white active:bg-primary active:text-white"
      }`,
    delete: `bg-error text-white border-darkB
        ${!disabled && !loading && "hover:bg-opacity-[0.9] active:bg-opacity-[0.9]"}`,
    danger: `bg-white text-error border-error
        ${
          !disabled &&
          !loading &&
          "hover:bg-error hover:text-white active:text-white active:bg-error"
        }`,
  };

  const combinedClassName = `${base} ${variationStyles[variation]} ${styles}`;

  if (To)
    return (
      <Link
        to={To}
        replace={Replace}
        onClick={onClick}
        className={combinedClassName}
        title={AriaLabel}
        aria-label={AriaLabel}
        disabled={disabled || loading}
      >
        {loading ? <Loading /> : children}
      </Link>
    );

  return (
    <button
      onClick={onClick}
      type={type}
      disabled={disabled || loading}
      className={combinedClassName}
      title={AriaLabel}
      aria-label={AriaLabel}
      name={name}
    >
      {loading ? <Loading /> : children}
    </button>
  );
}
