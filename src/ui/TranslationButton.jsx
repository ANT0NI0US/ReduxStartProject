import { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import { MdLanguage } from "react-icons/md";
import { useOutsideClick } from "@/hooks/useOutsideClick";

export default function TranslateButton() {
  const { t, i18n } = useTranslation();
  const [openMenu, setOpenMenu] = useState(false);

  const toggleMenu = () => setOpenMenu((prev) => !prev);
  const ref = useOutsideClick(() => setOpenMenu(false));

  const languageNow = i18n.language;

  useEffect(() => {
    if (languageNow === "ar") {
      document.documentElement.setAttribute("dir", "rtl");
    } else {
      document.documentElement.setAttribute("dir", "ltr");
    }
  }, [languageNow]);

  const changeLanguageAndDirection = (language) => {
    i18n.changeLanguage(language);

    if (language === "ar") {
      document.documentElement.setAttribute("dir", "rtl");
    } else if (language === "en") {
      document.documentElement.setAttribute("dir", "ltr");
    }
  };

  return (
    <div
      ref={ref}
      className="hover:bg-primary/80 relative flex cursor-pointer items-center gap-[10px] rounded-full px-[10px] py-[5px]"
      onClick={toggleMenu}
    >
      <MdLanguage className="text-[20px]" />
      <p className="rounded-full p-[3px] text-xs font-bold">
        {i18n.language === "en" ? "English" : "العربيه"}
      </p>

      {openMenu && (
        <div
          className={`border-lightRed absolute bottom-[-75px] left-[50%] translate-x-[-50%] rounded-md border bg-white p-[5px] text-center text-sm shadow-lg`}
        >
          <p
            className="hover:bg-lightRed hover:text-primary rounded-md p-[5px] transition-all"
            onClick={() => {
              changeLanguageAndDirection("en");
              i18n.changeLanguage("en");
            }}
          >
            {t("general.english")}
          </p>
          <p
            onClick={() => {
              changeLanguageAndDirection("ar");
              i18n.changeLanguage("ar");
            }}
            className="hover:bg-lightRed hover:text-primary rounded-md p-[5px] transition-all"
          >
            {t("general.arabic")}
          </p>
        </div>
      )}
    </div>
  );
}
