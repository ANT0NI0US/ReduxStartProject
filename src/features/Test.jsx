import { useTranslation } from "react-i18next";
const Test = () => {
  const { t } = useTranslation();
  return <div>{t("dashboard.dashboard")}</div>;
};

export default Test;
