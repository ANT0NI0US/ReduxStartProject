import { useTranslation } from "react-i18next";
import { FaLongArrowAltLeft } from "react-icons/fa";
import Button from "./Button";

export default function BackButton({ To = "/", onClick }) {
  const { t } = useTranslation();

  return (
    <Button
      AriaLabel={t("general.back")}
      variation="secondary"
      onClick={onClick}
      To={To}
      Replace
    >
      {t("general.back")}
      <FaLongArrowAltLeft />
    </Button>
  );
}
