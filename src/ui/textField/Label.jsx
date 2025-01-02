export default function Label({ label, error }) {
  return (
    <label htmlFor={label} className="mb-1 block text-sm ltr:pl-1 rtl:pr-1">
      {label} {error && <span className="text-[#EE4B2B]"> *</span>}
    </label>
  );
}
