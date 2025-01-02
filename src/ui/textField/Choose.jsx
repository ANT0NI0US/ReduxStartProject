import React from "react";
import { useTranslation } from "react-i18next";
import Select from "react-select";
import Error from "./Error";
import Label from "./Label";

const customStyles = (error) => ({
  container: (provided) => ({
    ...provided,
    pointerEvents: "auto",
  }),
  control: (provided, { isDisabled }) => ({
    ...provided,
    borderRadius: "6px",
    border: `${error ? "3px solid #EE4B2B" : "1px solid #1b739f"}`,
    width: "100%",
    height: "100%",
    padding: "0px",
    paddingTop: "5px",
    paddingBottom: "5px",
    backgroundColor: isDisabled ? "#d1dae6" : "#ffffff",
    color: "#353535",
    outline: "none",
    maxHeight: "60px",
    overflowY: "auto",
    boxShadow: "none",
    cursor: isDisabled ? "not-allowed" : "pointer",
    "&:hover": {
      borderColor: error ? "#EE4B2B" : "#1b739f",
    },
    "&:focus": {
      borderColor: error ? "#EE4B2B" : "#174863",
    },
  }),
  dropdownIndicator: (provided, { isDisabled }) => ({
    ...provided,
    color: "#1b739f",
    cursor: isDisabled ? "not-allowed" : "pointer",
    pointerEvents: isDisabled ? "none" : "auto",
    "&:hover": {
      color: "#1b739f",
    },
  }),
  clearIndicator: (provided) => ({
    ...provided,
    color: "#1b739f",
    "&:hover": {
      color: "#1b739f",
    },
  }),
  indicatorSeparator: (provided, { isDisabled }) => ({
    ...provided,
    backgroundColor: "#1b739f",
  }),
  noOptionsMessage: (provided) => ({
    ...provided,
    color: "#353535",
  }),
  menuList: (provided) => ({
    ...provided,
    maxHeight: "130px",
    overflowY: "auto",
    backgroundColor: "#f2f9fd",
    border: "1px solid #1b739f",
    padding: "0px",
  }),
  input: (provided) => ({
    ...provided,
    color: "#353535",
  }),
  placeholder: (provided) => ({
    ...provided,
    color: "#9ca6b2",
  }),
  option: (provided, state) => ({
    ...provided,
    cursor: "pointer",
    backgroundColor: state.isSelected
      ? "#2c9bcb"
      : state.isFocused
        ? "#e4f1fa"
        : null,
    color: state.isSelected ? "white" : state.isFocused ? "#353535" : "#353535",
    "&:hover": state.isSelected
      ? {}
      : {
          backgroundColor: "#e4f1fa",
          color: "black",
        },
  }),
  multiValue: (provided) => ({
    ...provided,
    backgroundColor: "#e4f1fa",
    maxHeight: "100px",
    overflowY: "auto",
  }),
  multiValueLabel: (provided) => ({
    ...provided,
    color: "#353535",
  }),
  multiValueRemove: (provided) => ({
    ...provided,
    color: "#1b739f",
    "&:hover": {
      backgroundColor: "transparent",
      color: "#ff0000",
    },
  }),
  singleValue: (provided) => ({
    ...provided,
    color: "#353535",
  }),
  menuPortal: (provided) => ({
    ...provided,
    zIndex: 1000000,
  }),
});

export default function Choose({ label, error, field, ...rest }) {
  const { t, i18n } = useTranslation();

  return (
    <div key={i18n.language} className="w-full">
      {label && <Label label={label} error={error} />}

      <Select
        styles={customStyles(error)}
        className="w-full"
        placeholder={t("general.selectOption")}
        {...(field ? field : {})}
        {...rest}
        menuPortalTarget={document.body}
      />

      <Error error={error} />
    </div>
  );
}

// {/* <Controller
// name="katkot"
// control={control}
// rules={{ required: "this field is required" }}
// render={({ field }) => (
//   <Choose
//     field={field}
//     options={[
//       { label: "totos", value: 1 },
//       { label: "nasr", value: 2 },
//     ]}
//     label="wala ya wala adl3 ya wala"
//     error={errors?.katkot?.message}
//   />
// )}
// /> */}
