export default function Information({ head, info, textStyle = "" }) {
  if (!info) return;
  return (
    <div className={`flex flex-wrap gap-1 rounded-md border bg-info p-[8px]`}>
      {head && (
        <p className={`rtl:font-alexandria font-bold ltr:font-protest`}>
          {head}:
        </p>
      )}
      <span className={`${textStyle}`}>{info || "-"}</span>
    </div>
  );
}
