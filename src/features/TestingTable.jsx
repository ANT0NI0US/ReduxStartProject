import Table from "@/ui/table/Table";
import { useTranslation } from "react-i18next";
import TestingTableRow from "./TestingTableRow";

// const data = [
//   {
//     id: 1,
//     arabic:
//       "تعبتيستب بتيسبتنيسبيسب يلا بيسلابنسيتب بنتساينبانسي يسنتبانتسيبا بىتسينبانتيساب انيبنتيسبناسي انبتاسينبتسينت ابنيسانباسينب ابنسيابنتسيابنت",
//     english: "Man",
//     french: "Homme",
//     german: "Mann",
//   },
//   {
//     id: 2,
//     arabic: "الرجل",
//     english: "Man",
//     french: "Homme",
//     german: "Mann",
//   },
//   {
//     id: 3,
//     arabic: "الرجل",
//     english: "Man",
//     french: "Homme",
//     german: "Mann",
//   },
//   {
//     id: 4,
//     arabic: "الرجل",
//     english: "Man",
//     french: "Homme",
//     german: "Mann",
//   },
// ];

const data = [];

export default function TestingTable() {
  const { t } = useTranslation();
  return (
    <Table>
      <Table.Header>
        <Table.Cell isHeader>{t("general.arabic")}</Table.Cell>
        <Table.Cell isHeader>{t("general.english")}</Table.Cell>
        <Table.Cell isHeader>{t("general.arabic")}</Table.Cell>
        <Table.Cell isHeader>{t("general.english")}</Table.Cell>
      </Table.Header>
      <Table.Body
        data={data}
        render={(test) => <TestingTableRow test={test} key={test?.id} />}
      />
    </Table>
  );
}
