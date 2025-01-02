import Error from "./Error";
import Label from "./Label";
import { VARIATION_STYLES } from "./variationStyles";

export default function TextArea({
  placeholder,
  register,
  error,
  disabled,
  label,
  Rows = 4,
  variation = "filled",
  ...rest
}) {
  const styles = VARIATION_STYLES[variation];
  const errorStyles = error ? styles.error : styles.default;
  return (
    <div className="relative w-full">
      {label && variation === "filled" && <Label label={label} error={error} />}

      <textarea
        id={placeholder}
        rows={Rows}
        className={`input resize-none rounded-md ${styles.input} ${errorStyles}`}
        placeholder={!label || variation === "filled" ? placeholder : ""}
        disabled={disabled}
        {...(register ? register : {})}
        {...rest}
      />

      {/* Floating Label for Non-Filled Variations */}
      {label && variation !== "filled" && (
        <label
          htmlFor={placeholder}
          className={`${disabled ? "cursor-not-allowed" : ""} ${styles.label}`}
        >
          {label} {error && <span className="text-error"> *</span>}
        </label>
      )}

      <Error error={error} />
    </div>
  );
}
