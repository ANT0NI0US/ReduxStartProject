import Label from "./Label";
import Error from "./Error";

export default function Switch({
  on = "",
  off = "",
  label,
  checked,
  register,
  error,
  ...rest
}) {
  return (
    <div className="flex items-center gap-2">
      {label && <Label label={label} error={error} />}
      <label
        className="relative inline-flex w-[50px] cursor-pointer items-center"
        title={`${checked ? on : off}`}
      >
        <input
          type="checkbox"
          className="peer sr-only"
          checked={checked}
          {...(register ? register : {})}
          {...rest}
        />
        <div className="after:bg-blue3 peer-checked:bg-blue1 peer h-8 w-12 rounded-full border bg-white after:absolute after:left-[5px] after:top-[4px] after:h-6 after:w-5 after:rounded-full after:border after:border-white after:transition-all after:content-[''] peer-checked:after:translate-x-full peer-checked:after:border-transparent peer-focus:ring-0"></div>
      </label>

      <Error error={error} />
    </div>
  );
}
