import Button from "@/ui/buttons/Button";
import { useTranslation } from "react-i18next";
import { TiArrowBack } from "react-icons/ti";

export default function PageNotFound() {
  const { t, i18n } = useTranslation();
  return (
    <main className="flexCenter bg-grayColor1 h-screen w-full flex-col">
      <div className="relative">
        <h1 className="text-9xl font-extrabold tracking-widest text-textColor">
          404
        </h1>
        <div
          className={`bg-mainColor absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 rotate-12 rounded px-2 text-sm text-textColor`}
        >
          {t("general.pageNotFound")}
        </div>
      </div>
      <div className="w-[200px]">
        <Button
          To="/"
          replace
          AriaLabel={t("general.backToDashboard")}
          styles={`${i18n.language === "en" ? "!flex-row-reverse" : "!flex-row"}`}
        >
          <p>{t("general.backToDashboard")}</p>
          <TiArrowBack size={22} />
        </Button>
      </div>
    </main>
  );
}
