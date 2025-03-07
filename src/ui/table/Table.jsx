import { useTranslation } from "react-i18next";
import HighlightMessage from "../HighlightMessage";

const Table = ({ children }) => {
  return (
    <div className="w-full overflow-x-auto rounded-tl-md rounded-tr-md shadow-md">
      <table className="w-full text-center text-sm">{children}</table>
    </div>
  );
};

const Header = ({ children }) => {
  return (
    <thead className="bg-secondary uppercase tracking-wider text-white ltr:font-protest rtl:font-alexandria">
      <tr>{children}</tr>
    </thead>
  );
};

const Body = ({ data, render }) => {
  const { t } = useTranslation();
  if (!data.length)
    return (
      <tbody>
        <tr>
          <td colSpan="100%">
            <HighlightMessage Styles="border-0! rounded-none!">
              <p className="text-lg">{t("general.noData")}</p>
            </HighlightMessage>
          </td>
        </tr>
      </tbody>
    );
  return <tbody className="bg-white">{data?.map(render)}</tbody>;
};

const Row = ({ children }) => {
  return (
    <tr className="h-[60px] border-b border-gray-300 last:border-b-0 odd:bg-info even:bg-white">
      {children}
    </tr>
  );
};

const Cell = ({ children, isHeader = false, colSpan = 1, rowSpan = 1 }) => {
  const Tag = isHeader ? "th" : "td";
  return (
    <Tag
      colSpan={colSpan}
      rowSpan={rowSpan}
      scope={isHeader ? "col" : "row"}
      className={`${isHeader ? "p-4" : "p-2"} min-w-[150px] border-x border-x-gray-300 text-center first:border-s-0 last:border-e-0`}
    >
      <div className="flexCenter flex-col">{children}</div>
    </Tag>
  );
};

export function Footer({ children }) {
  return (
    <tfoot>
      <tr>
        <td colSpan="100%">{children}</td>
      </tr>
    </tfoot>
  );
}

Table.Header = Header;
Table.Body = Body;
Table.Row = Row;
Table.Cell = Cell;
Table.Footer = Footer;

export default Table;
