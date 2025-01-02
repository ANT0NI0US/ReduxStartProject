import { useSearchParams } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { MdKeyboardArrowLeft, MdKeyboardArrowRight } from "react-icons/md";
import { PAGE_SIZE } from "../utils/constans";

export default function Pagination({ count, pageCount }) {
  const [t] = useTranslation();
  const [searchParams, setSearchParams] = useSearchParams();

  const currentPage = !searchParams.get("page")
    ? 1
    : Number(searchParams.get("page"));

  function nextPage() {
    const next = currentPage === pageCount ? currentPage : currentPage + 1;
    searchParams.set("page", next);
    setSearchParams(searchParams);
  }

  function previousPage() {
    const prev = currentPage === 1 ? currentPage : currentPage - 1;
    searchParams.set("page", prev);
    setSearchParams(searchParams);
  }

  if (pageCount <= 1) return null;

  return (
    <div
      className={
        "flex flex-wrap items-center justify-around gap-x-[10px] gap-y-[20px] rounded-md border-[2px] border-lightRed bg-white p-[10px] sm:flex-nowrap sm:justify-between"
      }
    >
      <div className={"flex items-center justify-between gap-[20px]"}>
        <button
          className={`flex items-center justify-between gap-[5px] rounded-md bg-lightRed p-[3px] ${
            currentPage === 1 ? "cursor-not-allowed" : ""
          }`}
          onClick={previousPage}
          disabled={currentPage === 1}
        >
          <MdKeyboardArrowLeft
            className={`text-2xl rtl:scale-[-1] ${
              currentPage === 1 ? "cursor-not-allowed" : ""
            }`}
          />
          <span>{t("general.previous")}</span>
        </button>

        <button
          className={`flex items-center justify-between gap-[5px] rounded-md bg-lightRed p-[3px] ${
            currentPage === pageCount ? "cursor-not-allowed" : ""
          }`}
          onClick={nextPage}
          disabled={currentPage === pageCount}
        >
          <span>{t("general.next")}</span>
          <MdKeyboardArrowRight
            className={`text-2xl rtl:scale-[-1] ${
              currentPage === pageCount ? "cursor-not-allowed" : ""
            }`}
          />
        </button>
      </div>

      <div className={"flex items-center justify-between gap-[5px]"}>
        <p className="flex gap-[4px]">
          {t("general.showing")}{" "}
          <span> {(currentPage - 1) * PAGE_SIZE + 1} </span> {t("general.to")}
          <span>
            {currentPage === pageCount ? count : currentPage * PAGE_SIZE}
          </span>
          {t("general.of")} <span>{count}</span>
          {t("general.results")}
        </p>
      </div>
      <p>
        {t("general.totalPages")}: {`(${pageCount})`}
      </p>
    </div>
  );
}
