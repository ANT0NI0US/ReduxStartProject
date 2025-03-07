import { useState, useEffect } from "react";
import { useTranslation } from "react-i18next";
import { FaArrowUp } from "react-icons/fa";

export default function ScrollToTopButtons() {
  const { t } = useTranslation();
  const [showScrollButton, setShowScrollButton] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 100) {
        setShowScrollButton(true);
      } else {
        setShowScrollButton(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <div
      title={t("general.backToTop")}
      onClick={scrollToTop}
      className={`${
        showScrollButton ? "bounce-infinite" : "hidden"
      } flexCenter border-dark-primary hover:bg-dark-primary fixed right-5 bottom-5 z-10000000000000 cursor-pointer rounded-xl border-[2px] bg-white p-3 transition-all duration-300 hover:text-white`}
    >
      <button aria-label={t("general.backToTop")}>
        <FaArrowUp />
      </button>
    </div>
  );
}
