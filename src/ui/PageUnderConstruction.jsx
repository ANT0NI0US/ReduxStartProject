import { IoConstruct } from "react-icons/io5";
import { useTranslation } from "react-i18next";

export default function PageUnderConstruction() {
  const { t } = useTranslation();

  return (
    <div className="flexCenter flex-col gap-2">
      <IoConstruct size={100} className="text-secondary" />
      <div className="rtl:font-alexandria text-center text-xl font-semibold uppercase tracking-wider text-primary sm:text-2xl md:text-3xl lg:text-4xl ltr:font-protest">
        <p>{t("general.underConstructions")}</p>
      </div>
    </div>
  );
}
