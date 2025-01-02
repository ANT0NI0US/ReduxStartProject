import { useTranslation } from "react-i18next";
import { FaSort, FaSortUp, FaSortDown } from "react-icons/fa";
import Table from "./table/Table";

export default function SortingTableHead({
  action = false,
  headData,
  handleSort,
  sortConfig,
}) {
  const { t } = useTranslation();
  return (
    <>
      {headData?.map((head, index) => (
        <Table.Cell isHeader key={index}>
          <div
            onClick={() => handleSort(head.sortName)}
            className="flexCenter cursor-pointer gap-1"
          >
            <p>{t(head.text)}</p>
            <div>
              {sortConfig.key === head.sortName ? (
                sortConfig.direction === "asc" ? (
                  <FaSortUp />
                ) : (
                  <FaSortDown />
                )
              ) : (
                <FaSort />
              )}
            </div>
          </div>
        </Table.Cell>
      ))}

      {action && <Table.Cell isHeader>{t("general.actions")}</Table.Cell>}
    </>
  );
}
