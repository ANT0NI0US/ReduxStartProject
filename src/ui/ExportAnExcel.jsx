import * as XLSX from "xlsx";
import { PiMicrosoftExcelLogoFill } from "react-icons/pi";
import Button from "./buttons/Button";

export default function ExportAnExcel({ data, title, tooltip, onChange }) {
  const handleDownload = () => {
    const worksheet = XLSX.utils.json_to_sheet(data);
    const workbook = XLSX.utils.book_new();
    XLSX.utils.book_append_sheet(workbook, worksheet, "Sheet1");
    XLSX.writeFile(workbook, `${title}.xlsx`);
  };
  const handleClick = () => {
    handleDownload();
    if (onChange) onChange();
  };

  return (
    <Button
      onClick={handleClick}
      AriaLabel={tooltip}
      variation="secondary"
      styles="!h-fit !min-h-[45px]"
    >
      {!onChange && <PiMicrosoftExcelLogoFill size={25} />}
      <span>{title}</span>
    </Button>
  );
}
