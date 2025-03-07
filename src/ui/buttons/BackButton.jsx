import { useTranslation } from "react-i18next";
import { TiArrowBack } from "react-icons/ti";
import Button from "./Button";

export default function BackButton({ To = "/", onClick }) {
  const { t, i18n } = useTranslation();

  return (
    <Button
      AriaLabel={t("general.back")}
      variation="secondary"
      onClick={onClick}
      To={To}
      Replace
      styles={`${i18n.language === "en" ? "flex-row-reverse!" : "flex-row!"}`}
    >
      {t("general.back")}
      <TiArrowBack size={22} />
    </Button>
  );
}
