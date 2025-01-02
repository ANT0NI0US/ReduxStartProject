import styles from "./Spinner.module.css";

const spinnerSizes = {
  md: "h-[50vh]",
  lg: "h-[100vh] min-h-full",
};

export default function Spinner({ size = "md" }) {
  return (
    <div
      className={`flexCenter bg-transparent backdrop-blur-sm ${spinnerSizes[size]}`}
    >
      <div className={`${styles.loader}`}></div>
    </div>
  );
}
