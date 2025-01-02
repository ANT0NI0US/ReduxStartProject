export default function Error({ error }) {
  return (
    error && (
      <div className="mt-1 text-xs text-[#EE4B2B] ltr:pl-1 rtl:pr-1">
        {error}
      </div>
    )
  );
}
