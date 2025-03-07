import { useState } from "react";
import { LuEye } from "react-icons/lu";
import { FaRegEyeSlash } from "react-icons/fa";
import { useTranslation } from "react-i18next";
import { MdCloudUpload } from "react-icons/md";
import { normalError, VARIATION_STYLES } from "./variationStyles";
import Error from "./Error";
import Label from "./Label";

export default function Input({
  type = "text",
  placeholder,
  error,
  Icon,
  register,
  disabled,
  label,
  variation = "outline",
  ...rest
}) {
  const [showPassword, setShowPassword] = useState(false);
  const toggleShowPassword = () => setShowPassword((prev) => !prev);

  const { t, i18n } = useTranslation();

  const styles = VARIATION_STYLES[variation];
  const errorStyles = error ? styles.error : styles.default;

  return (
    <div className="w-full">
      {/* Label for "filled" variation */}
      {label && type !== "file" && variation === "filled" && (
        <Label label={label} error={error} />
      )}

      <div
        className={`relative ${
          type !== "file"
            ? `z-10 flex items-center rounded-md transition-all duration-300 ${errorStyles}`
            : ""
        }`}
      >
        {/* Input Field */}
        <input
          id={placeholder}
          type={showPassword ? "text" : type}
          placeholder={!label || variation === "filled" ? placeholder : " "}
          className={`input ${styles.input} ${type === "file" ? "hidden" : ""} ${!Icon ? "rounded-md" : i18n.language === "ar" ? "rounded-tr-md rounded-br-md" : "rounded-tl-md rounded-bl-md"} `}
          disabled={disabled}
          {...(register ? register : {})}
          {...rest}
        />

        {/* Optional Icon */}
        {Icon && type !== "file" && type !== "password" && (
          <div
            className={`${i18n.language === "ar" ? "rounded-tl-md rounded-bl-md" : "rounded-tr-md rounded-br-md"} flexCenter h-[44px] w-[40px] ${disabled ? "bg-disabled cursor-not-allowed" : ""}`}
          >
            {Icon}
          </div>
        )}

        {/* Password Visibility Toggle */}
        {type === "password" && (
          <button
            type="button"
            className="flexCenter text-gray h-[44px] w-[40px]"
            onClick={toggleShowPassword}
            aria-label={
              showPassword
                ? t("general.hidePassword")
                : t("general.showPassword")
            }
            title={
              showPassword
                ? t("general.hidePassword")
                : t("general.showPassword")
            }
          >
            {showPassword ? <FaRegEyeSlash /> : <LuEye />}
          </button>
        )}

        {/* Floating Label for Non-Filled Variations */}
        {label && type !== "file" && variation !== "filled" && (
          <label
            htmlFor={placeholder}
            className={`${disabled ? "cursor-not-allowed" : ""} ${styles.label}`}
          >
            {label} {error && <span className="text-error"> *</span>}
          </label>
        )}
      </div>

      {/* File Upload */}
      {type === "file" && (
        <label
          className={`flexCenter border-dark-primary text-dark-primary h-40 w-full cursor-pointer flex-col rounded-lg border-4 border-dashed p-5 text-center ${disabled ? "bg-disabled cursor-not-allowed" : ""} ${error ? `${normalError}` : ""}`}
          disabled={disabled}
          onClick={() => document.getElementById(placeholder)?.click()}
        >
          <MdCloudUpload size={100} />
          <span className="font-bold uppercase">download {placeholder}</span>
        </label>
      )}

      {/* Error Message */}
      <Error error={error} />
    </div>
  );
}
