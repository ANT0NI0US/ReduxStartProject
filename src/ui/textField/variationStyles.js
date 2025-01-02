export const normalError = "!border-error focus:!border-error";

export const VARIATION_STYLES = {
  outline: {
    input: "peer appearance-none shadow-sm",
    error: `border-[3px] ${normalError}`,
    default: "border-[2px] border-darkPrimary focus:border-secondary",
    label:
      "peer-placeholder-shown:bg-transparent peer-placeholder-shown:text-darkPrimary peer-focus:bg-white peer-focus:text-textColor text-darkPrimary absolute top-[11px] -translate-y-6 transform px-[0.5px] duration-300 peer-placeholder-shown:translate-y-0 peer-focus:-translate-y-6 peer-focus:px-[4px] ltr:left-6 rtl:right-6",
  },
  standard: {
    input: "peer placeholder-transparent",
    error: "border-b-[3px] border-b-error focus:border-b-error",
    default: "border-b-[2px] border-b-darkPrimary focus:border-b-secondary",
    label:
      "peer-placeholder-shown:text-darkPrimary peer-focus:text-textColor absolute -top-3.5 text-sm text-darkPrimary transition-all peer-placeholder-shown:top-2 peer-placeholder-shown:text-base peer-focus:-top-3.5 peer-focus:text-sm ltr:left-[10px] rtl:right-[10px]",
  },
  filled: {
    input: "",
    error: `border-[3px] ${normalError}`,
    default: "border-[2px] border-darkPrimary focus:border-secondary",
    label: "",
  },
};
