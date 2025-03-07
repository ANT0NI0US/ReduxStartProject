import { useState } from "react";
import { useTranslation } from "react-i18next";
import { LuSunMoon } from "react-icons/lu";
import { FaMoon } from "react-icons/fa";

export default function DarkModeButton() {
  const { t, i18n } = useTranslation();
  const [dark, setDark] = useState(false);

  const darkModeHandler = () => {
    setDark(!dark);
    document.documentElement.classList.toggle("dark");
  };

  return (
    <div
      title={`${dark ? t("general.lightMode") : t("general.darkMode")}`}
      className={`${
        i18n.language === "ar" ? "left-2" : "right-2"
      } fixed bottom-2 z-50`}
    >
      <button
        onClick={darkModeHandler}
        aria-label={t("general.colorTheme")}
        className={`relative flex size-10 items-center justify-center rounded-full bg-white p-2 shadow-lg transition-colors duration-500 hover:shadow-xl focus:outline-hidden dark:bg-gray-800`}
      >
        <span
          className={`absolute h-8 w-8 rounded-full transition-transform duration-500 ${
            dark
              ? "scale-100 transform bg-yellow-500"
              : "scale-100 transform bg-gray-500"
          }`}
        ></span>
        <span
          className={`absolute text-sm font-bold text-white transition-opacity duration-300 ${
            dark ? "opacity-100" : "opacity-0"
          }`}
        >
          <LuSunMoon size={20} />
        </span>
        <span
          className={`absolute text-sm font-bold text-gray-800 transition-opacity duration-300 ${
            dark ? "opacity-0" : "opacity-100"
          }`}
        >
          <FaMoon size={20} />
        </span>
      </button>
    </div>
  );
}
