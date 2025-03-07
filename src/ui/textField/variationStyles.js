export const normalError = "border-error! focus:border-error!";

export const VARIATION_STYLES = {
  outline: {
    input: "peer appearance-none shadow-xs",
    error: `border-[3px] ${normalError}`,
    default: "border-[2px] border-dark-primary focus:border-secondary",
    label:
      "peer-placeholder-shown:bg-transparent peer-placeholder-shown:text-dark-primary peer-focus:bg-white peer-focus:text-text-color text-dark-primary absolute top-[11px] -translate-y-6 transform px-[0.5px] duration-300 peer-placeholder-shown:translate-y-0 peer-focus:-translate-y-6 peer-focus:px-[4px] ltr:left-6 rtl:right-6",
  },
  standard: {
    input: "peer placeholder-transparent",
    error: "border-b-[3px] border-b-error focus:border-b-error",
    default: "border-b-[2px] border-b-dark-primary focus:border-b-secondary",
    label:
      "peer-placeholder-shown:text-dark-primary peer-focus:text-text-color absolute -top-3.5 text-sm text-dark-primary transition-all peer-placeholder-shown:top-2 peer-placeholder-shown:text-base peer-focus:-top-3.5 peer-focus:text-sm ltr:left-[10px] rtl:right-[10px]",
  },
  filled: {
    input: "",
    error: `border-[3px] ${normalError}`,
    default: "border-[2px] border-dark-primary focus:border-secondary",
    label: "",
  },
};
