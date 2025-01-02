const GRID_VARIANTS = {
  default: "sm:grid-cols-[repeat(auto-fill,minmax(300px,1fr))]",
  twoColumns: "sm:grid-cols-2",
};

export default function GridContainer({
  children,
  variant = "default",
  Font = "",
}) {
  return (
    <div
      className={`flex flex-col gap-[15px] sm:grid ${GRID_VARIANTS[variant]} ${Font}`}
    >
      {children}
    </div>
  );
}
