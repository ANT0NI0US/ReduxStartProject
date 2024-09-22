import styles from "./Spinner.module.css";

export default function Spinner({ Styles = "h-[100vh] min-h-full" }) {
  return (
    <div className={`flexCenter bg-transparent backdrop-blur-sm ${Styles}`}>
      <div
        className={`${styles.loader} h-[4px] w-[4px] rounded-[50%] text-primary`}
      ></div>
    </div>
  );
}
